import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import fs from 'fs';
import cors from 'cors';

import appRouter from './app';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.APP_PORT ?? 4000;
const webPath = path.resolve(__dirname, '../web');

app.use(cors({
    origin: ['http://localhost:3000', 'https://lesgosurabaya.site', 'https://www.lesgosurabaya.site'],
    credentials: true,
}));
app.use('/api', appRouter);

if (fs.existsSync(webPath)) {
    app.use(express.static(webPath));

    app.get(/^\/(?!api).*/, (_, res) => {
        res.sendFile(path.join(webPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Local Server http://localhost:${PORT}`);
});