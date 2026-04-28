import { getGroupInfo, getWallPosts, normalizeGroupId } from '../services/vkApi.js';
import { analyzeWallPosts } from '../services/analytics.js';
import { getCache, setCache } from '../services/cache.js';


async function analyzeHandler(req, res) {
    const { groupId, from, to } = req.body;

    if (!groupId) {
        return res.status(400).json({ error: 'groupId обязателен' });
    }

    try {
        const group = await getGroupInfo(groupId);

        const today = new Date().toISOString().split('T')[0];
        const cacheKey = `posts:${group.id}:${today}`;

        const fromTs = Number(from);
        const toTs = Number(to);

        let posts = await getCache(cacheKey);
        if (!posts) {
            const ownerId = -group.id;
            posts = await getWallPosts(ownerId, fromTs, toTs);
            await setCache(cacheKey, posts);
        }

        const filtered = posts.filter(p => p.date >= fromTs && p.date <= toTs);
        const report = analyzeWallPosts(filtered);

        res.json({ group, report });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function healthHandler(req, res) {
    res.json({ status: 'ok', uptime: process.uptime() });
}

export { healthHandler, analyzeHandler };