import axios from 'axios';
import dotenv from 'dotenv';
import { logger } from './logger.js';
dotenv.config();

const VK_API_URL = process.env.VK_API_URL;
const VK_API_VERSION = process.env.VK_API_VERSION;
const TOKEN = process.env.VK_ACCESS_TOKEN;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms) );

async function vkRequest(method, params = {},retries = 3 ) {

    console.log('URL:', `${VK_API_URL}/${method}`);

    try {
        const start = Date.now();
        const {data} = await axios.get(`${VK_API_URL}/${method}`, {
            timeout: 5000,
            params: {
                ...params,
                access_token: TOKEN,
                v: VK_API_VERSION,
            },
        });
        const duration = Date.now() - start;
        logger.logRequest(method, duration);

        if (data.error) {
            if (data.error.error_code === 6 && retries > 0) {
                await sleep(1000);
                return vkRequest(method, params, retries - 1);
            }
            const err = new Error(`VK API Error: ${data.error.error_msg}`);
            logger.logError(method, err);
            throw err;
        }

        return data.response;
    }
    catch(err) {
        if( err.response?.status === 429 && retries > 0 ) {
            await sleep(2000);
            return vkRequest(method, params, retries - 1);
        }

        if( err.code === 'ECONNABORTED' || err.code === 'ECONNREFUSED' ) {
            const netErr = new Error(`VK API недоступен: ${err.code}`);
            logger.logError(method, netErr);
            throw netErr;
        }
        throw err;
    }
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

        await sleep(334);
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

        await sleep(334);
        const batch = await vkRequest('wall.get', {
            owner_id: ownerId,
            count: BATCH_SIZE,
            offset: offset,
        });

        const posts = batch.items;

        if( posts.length === 0 || posts[posts.length - 1].date < from ) {
            const filtered = posts.filter(p => p.date >= from && p.date <= to);
            allPosts.push(...filtered);
            break;
        }

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

        await sleep(334);

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