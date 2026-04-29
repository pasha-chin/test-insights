import { getGroupInfo, getWallPosts, normalizeGroupId } from '../services/vkApi.js';
import { analyzeWallPosts } from '../services/analytics.js';
import { getCache, setCache } from '../services/cache.js';
import { logger } from '../services/logger.js';


async function analyzeHandler(req, res) {
    const { groupId, from, to } = req.body;

    if( !groupId || !from || !to ) {
        return res.status(400).json({ error: 'ID или имя сообщества, начало и конец периода обязательны' });
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

    const fromTs = Math.floor(new Date(from).getTime() / 1000);
    const toTs = Math.floor(new Date(to).getTime() / 1000);

    const fileName = `report_${groupId}_${fromTs}_${toTs}`;
    const cacheKey = `posts:${groupId}:${fromTs}:${toTs}`;
    const cached = await getCache(cacheKey);

    if( !cached || Object.keys(cached).length === 0 ) {
        return res.status(404).json({ error: 'Данные не найдены. Сначала выполните /analyze' });
    }

    const report = analyzeWallPosts(cached);

    const validFormats = ['csv', 'json'];
    const exportFormat = validFormats.includes(format) ? format : 'json';

    if( exportFormat === 'json' ) {
        res.setHeader('Content-Disposition', `attachment; filename="report_${groupId}.json"`);
        res.setHeader('Content-Type', 'application/json');
        return res.json(report);
    }

    if( exportFormat === 'csv' ) {
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}.csv"`);
        res.setHeader('Content-Type', 'text/csv');

        const rows = (report.topPosts || []).map(post => {
            const date = new Date(post.date).toLocaleDateString('ru-RU');
            console.log('post.date sample:', report.topPosts[0]?.date);
            return `${post.id},${date},${post.likes},${post.comments},${post.reposts},${post.engagement}`;
        });

        const header = 'id,date,likes,comments,reposts,engagement';
        const csv = [header, ...rows].join('\n');
        return res.send(csv);
    }

    res.status(400).json({ error: 'Unsupported format' });

}

export { healthHandler, analyzeHandler, reportHandler, exportHandler };