import { getBaseUrl } from '@/helper/getBaseUrl';
import axios from 'axios';

// Base API instance
export const api = axios.create({
    baseURL: getBaseUrl(),
    timeout: 10000,
});

// Optional: add token to each request if needed
export const setAuthToken = (token: string | null) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

