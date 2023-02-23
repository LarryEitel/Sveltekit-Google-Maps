import { PUBLIC_GOOGLE_MAPS_KEY } from '$env/static/public';

export const env = process.env.NODE_ENV || 'production';
export const isDev = env === 'development';
export const baseURL = isDev ? '' : '/dev';
export const mapsApiKey = PUBLIC_GOOGLE_MAPS_KEY;
export const mapKey = {};
