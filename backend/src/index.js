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

app.get('/health', healthHandler);

app.post( '/analyze', analyzeHandler);

app.get('/report/:groupId', reportHandler);

app.get('/export/:groupId', exportHandler);


app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    logger.info(`Сервер запущен на порту ${PORT}`);
});