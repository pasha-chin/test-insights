import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { healthHandler, analyzeHandler, reportHandler, exportHandler } from '../handlers/index.js';
import { logger } from '../services/logger.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );

const router = express.Router();

router.get('/health', healthHandler);

router.post('/analyze', analyzeHandler);

router.get('/report/:groupId', reportHandler);

router.get('/export/:groupId', exportHandler);

app.use('/api/v1', router);

app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    logger.info(`Сервер запущен на порту ${PORT}`);
});