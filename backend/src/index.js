import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { healthHandler, analyzeHandler  } from '../handlers/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );

app.get('/health', healthHandler );

app.post( '/analyze', analyzeHandler);

app.get('/report/:groupId', (req, res) => {
    const { groupId } = req.params;
    const { from, to } = req.query;
    res.json({ message: `Отчёт для ${groupId}`, from, to });
});

// app.get('/', (req, res) => {
//     res.json({ message: 'Сервер работает!' });
// });

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});