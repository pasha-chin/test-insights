import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { healthHandler, analyzeHandler, reportHandler, exportHandler } from '../handlers/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );

app.get('/health', healthHandler);

app.post( '/analyze', analyzeHandler);

app.get('/report/:groupId', reportHandler);

app.get('/export/:groupId', exportHandler);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});