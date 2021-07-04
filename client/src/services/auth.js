import { api } from './api';

export async function loginRequest(user) {
    const res = await api.post('/login', user);
    return res;
}

export async function signUpRequest(newUser) {
    const res = await api.post('/signup', newUser);
    return res;
}

export async function logoutRequest() {
    const res = await api.post('/logout');
    return res;
}

export async function refreshRequest() {
    const res = await api.post('/refresh');
    return res;
}
