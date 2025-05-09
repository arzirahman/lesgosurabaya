import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'minimal',
});

export default prisma;