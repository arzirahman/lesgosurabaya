import dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = process.env.APP_PORT ?? 4000;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'ea79ba204caa56002e4bfe459c540aac8cd58517f6c797868d0f664ae7459351';
export const APP_URL = process.env.APP_URL ?? 'http://localhost:4000';