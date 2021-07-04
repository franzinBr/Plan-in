import { api } from './api';

export async function listModulesRequest() {
    const res = await api.get('/module');
    return res;
}

export async function listModulesAllRequest() {
    const res = await api.get('/module/all');
    return res;
}

export async function createModulesRequest(module) {
    const res = await api.post('/module', module);
    return res;
}

export async function editModuleRequest(id, editedModule) {
    const res = await api.put(`/module/${id}`, editedModule);
    return res;
}

export async function deleteModuleRequest(id) {
    const res = await api.delete(`/module/${id}`);
    return res;
}
