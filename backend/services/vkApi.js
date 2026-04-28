import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const VK_API_URL = process.env.VK_API_URL;
const VK_API_VERSION = process.env.VK_API_VERSION;
const TOKEN = process.env.VK_ACCESS_TOKEN;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms) );

async function vkRequest(method, params = {},retries = 3 ) {

    await sleep(334);

    console.log('URL:', `${VK_API_URL}/${method}`);

    const { data } = await axios.get(`${VK_API_URL}/${method}`, {
        params: {
            ...params,
            access_token: TOKEN,
            v: VK_API_VERSION,
        },
    });

    if( data.error ) {
        if( data.error.error_code === 6 && retries > 0 ) {
            await sleep(1000);
            return vkRequest(method, params, retries - 1);
        }
        throw new Error(`VK API Error: ${data.error.error_msg}`);
    }

    return data.response;
}

async function getGroupInfo(groupId) {
    const res = await vkRequest(
        'groups.getById',
        {
            group_id: groupId,
            fields: 'members_count,photo_200',
        }
    );
    console.log('VK response:', JSON.stringify(res));
    return res.groups[0];
}

async function getWallPosts( ownerId, from, to ){

    const BATCH_SIZE = 100;
    let allPosts = [];

    const res = await vkRequest('wall.get', {
        owner_id: ownerId,
        count: 1,
        offset: 0,
    });

    const totalCount = res.count;
    let offset = 0;

    if( totalCount <= 500 ) {
        // линейный перебор — текущий код
        allPosts = await fetchPostsLinear( ownerId, from, to, totalCount );
    } else {
        // бинарный поиск — напишем дальше
        const startOffset = await findStartOffset( ownerId, to, totalCount );
        allPosts = await fetchPostsFromOffset( ownerId, from, to, startOffset, totalCount );
    }

    return allPosts;

}

async function fetchPostsFromOffset( ownerId, from, to, startOffset, totalCount ) {
    const BATCH_SIZE = 100;
    let offset = startOffset;
    let allPosts = [];

    while( offset < totalCount ) {
        const batch = await vkRequest('wall.get', {
            owner_id: ownerId,
            count: BATCH_SIZE,
            offset: offset,
        });

        const posts = batch.items;
        if (!posts || posts.length === 0) break;

        const filtered = posts.filter(p => p.date >= from && p.date <= to);
        allPosts.push(...filtered);

        if( posts[posts.length - 1].date < from ) {
            break;
        }

        offset += BATCH_SIZE;
    }

    return allPosts;
}

async function fetchPostsLinear(ownerId, from, to, totalCount) {
    const BATCH_SIZE = 100;
    let offset = 0;
    let allPosts = [];

    while( offset < totalCount ) {
        const batch = await vkRequest('wall.get', {
            owner_id: ownerId,
            count: BATCH_SIZE,
            offset: offset,
        });

        const posts = batch.items;
        const filtered = posts.filter( p => p.date >= from && p.date <= to );
        allPosts.push(...filtered);

        offset += BATCH_SIZE;
    }

    return allPosts;
}

async function findStartOffset( ownerId, targetTimestamp, totalCount ) {
    let low = 0;
    let high = totalCount;

    while( low < high ) {
        const mid = Math.floor( (low + high) / 2);
        const res = await vkRequest('wall.get', {
            owner_id: ownerId,
            count: 1,
            offset: mid,
        });

        const post = res.items[0];
        if( !post ) break;

        if( post.date > targetTimestamp ) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

function normalizeGroupId(input) {

    if (/^-?\d+$/.test(String(input))) {
        return input;
    }

    return String(input).trim();
}

export { vkRequest, getGroupInfo, getWallPosts, normalizeGroupId, fetchPostsFromOffset };