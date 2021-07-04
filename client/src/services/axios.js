import axios from 'axios';

export function getAPIClient() {
    const api = axios.create({
        baseURL: 'http://localhost:3080/v1',
    });

    api.defaults.withCredentials = true;

    return api;
}
