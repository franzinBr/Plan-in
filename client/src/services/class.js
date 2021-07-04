import { api } from './api';

export async function listClassesFromModuleRequest(id) {
    const res = await api.get(`/class/${id}`);
    return res;
}

export async function editClassRequest(id, editedFields) {
    const res = await api.put(`/class/${id}`, editedFields);
    return res;
}

export async function createClassRequest(_class) {
    const res = await api.post('/class', _class);
    return res;
}

export async function deleteClassRequest(id) {
    const res = await api.delete(`/class/${id}`);
    return res;
}
