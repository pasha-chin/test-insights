const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/analyze', (req, res) => {
    const { groupId, from, to } = req.body;
    res.json({ message: 'Анализ запущен', groupId, from, to });
});

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