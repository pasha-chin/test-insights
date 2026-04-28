import { getGroupInfo, getWallPosts, normalizeGroupId } from '../services/vkApi.js';
import { analyzeWallPosts } from '../services/analytics.js';
import { getCache, setCache } from '../services/cache.js';
import { logger } from '../services/logger.js';


async function analyzeHandler(req, res) {
    const { groupId, from, to } = req.body;

    if( !groupId || !from || !to ) {
        return res.status(400).json({ error: 'groupId, from, to обязательны' });
    }

    try {
        const group = await getGroupInfo(groupId);

        const fromTs = Number(from);
        const toTs = Number(to);
        const cacheKey = `posts:${group.id}:${fromTs}:${toTs}`;


        let posts = await getCache(cacheKey);
        if( !posts ) {
            const ownerId = -group.id;
            posts = await getWallPosts(ownerId, fromTs, toTs);
            await setCache(cacheKey, posts);
        }

        // const filtered = posts.filter(p => p.date >= fromTs && p.date <= toTs);
        const report = analyzeWallPosts(posts);

        res.json({ group, report });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function healthHandler(req, res) {
    logger.info('GET /health');
    res.json({ status: 'ok', uptime: process.uptime() });
}

async function reportHandler(req, res) {
    const { groupId } = req.params;
    const { from, to } = req.query;

    const fromTs = Number(from);
    const toTs = Number(to);

    const group = await getGroupInfo(groupId);
    const cacheKey = `posts:${group.id}:${fromTs}:${toTs}`;

    const posts = await getCache(cacheKey);
    if( !posts ) {
        return res.status(404).json({ error: 'Отчёт не найден. Сначала вызови POST /analyze' });
    }

    const report = analyzeWallPosts(posts);
    res.json({ groupId, report });
}

async function exportHandler(req, res) {

    const { groupId } = req.params;
    const { from, to, format } = req.query;

    if( !groupId ) {
        return res.status(400).json({ error: 'groupId обязателен' });
    }

    const cacheKey = `report_${groupId}_${from}_${to}`;
    const cached = getCache(cacheKey);

    if( !cached ) {
        return res.status(404).json({ error: 'Данные не найдены. Сначала выполните /analyze' });
    }

    const validFormats = ['csv', 'json'];
    const exportFormat = validFormats.includes(format) ? format : 'json';

    if( exportFormat === 'json' ) {
        res.setHeader('Content-Disposition', `attachment; filename="report_${groupId}.json"`);
        res.setHeader('Content-Type', 'application/json');
        return res.json(cached);
    }

    if( exportFormat === 'csv' ) {
        res.setHeader('Content-Disposition', `attachment; filename="report_${groupId}.csv"`);
        res.setHeader('Content-Type', 'text/csv');

        const rows = cached.topPosts.map(post =>
            `${post.id},${post.date},${post.likes},${post.comments},${post.reposts},${post.engagement}`
        );

        const header = 'id,date,likes,comments,reposts,engagement';
        const csv = [header, ...rows].join('\n');
        return res.send(csv);
    }

    res.status(400).json({ error: 'Unsupported format' });

}

export { healthHandler, analyzeHandler, reportHandler, exportHandler };