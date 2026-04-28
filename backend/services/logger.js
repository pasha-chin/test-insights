import fs from 'fs';
import path from 'path';

const logFile = path.resolve('logs/app.log');
const logErrorFile = path.resolve('logs/error.log');

let vkRequestCount = 0;

if( !fs.existsSync('logs') ) {
    fs.mkdirSync('logs');
}

const writeToFile = (message) => {
    fs.appendFileSync(logFile, message + '\n');
};

const writeToFileError = (message) => {
    fs.appendFileSync(logErrorFile, message + '\n');
};

const logger = {
    info: (msg) => {
        const entry = `[${new Date().toISOString()}] [INFO] ${msg}`;
        console.log(entry);
        writeToFile(entry);
    },
    warn: (msg) => {
        const entry = `[${new Date().toISOString()}] [WARN] ${msg}`;
        console.warn(entry);
        writeToFile(entry);
    },
    error: (msg) => {
        const entry = `[${new Date().toISOString()}] [ERROR] ${msg}`;
        console.error(entry);
        writeToFileError(entry);
    },
    logRequest: (method, duration) => {
        vkRequestCount++;
        const entry = `[${new Date().toISOString()}] [VK API] ${method} — ${duration}ms | total requests: ${vkRequestCount}`;
        console.log(entry);
        writeToFile(entry);
    },
    logError: (method, error) => {
        const entry = `[${new Date().toISOString()}] [VK API ERROR] ${method} — ${error.message}`;
        console.error(entry);
        writeToFileError(entry);
    },
};

export { logger };