import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient();
const cache_ttl = Number(process.env.CACHE_TTL) || 3600

client.on('error', (err) => console.error('Redis error:', err));

await client.connect();

export default client;

const getCache = async (key) => {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
};

const setCache = async (key, value, ttl = cache_ttl) => {
    await client.set(key, JSON.stringify(value), { EX: Number(ttl) });
};

export { getCache, setCache };