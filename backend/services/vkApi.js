const axios = require('axios');

const VK_API_URL = process.env.VK_API_URL;
const VK_API_VERSION = process.env.VK_API_VERSION;
const TOKEN = process.env.VK_ACCESS_TOKEN;

async function vkRequest(method, params = {}) {
    const { data } = await axios.get(`${VK_API_URL}/${method}`, {
        params: {
            ...params,
            access_token: TOKEN,
            v: VK_API_VERSION,
        },
    });

    if (data.error) {
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
    return res.groups[0];
}

async function getWallPosts(ownerId, count = 100){
    const res = await vkRequest(
        'wall.get',
        {
            ownerId: ownerId,
            count,
            filter: 'all'
        }
    );

    return res.items;
}

module.exports = { vkRequest, getGroupInfo, getWallPosts };