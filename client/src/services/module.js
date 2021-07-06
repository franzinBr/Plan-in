import { api } from './api';

export async function listModulesRequest() {
    const res = await api.get('/modules');
    return res;
}

export async function listModulesAllRequest() {
    const res = await api.get('/modules/all');
    return res;
}

export async function createModulesRequest(module) {
    const res = await api.post('/modules', module);
    return res;
}

export async function editModuleRequest(id, editedModule) {
    const res = await api.put(`/modules/${id}`, editedModule);
    return res;
}

export async function deleteModuleRequest(id) {
    const res = await api.delete(`/modules/${id}`);
    return res;
}
