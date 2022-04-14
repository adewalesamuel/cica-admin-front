import { Api } from './Api';

const  ENPOINTS = {
    Programme: 'programmes',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Programme, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Programme}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Programme, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Programme}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Programme}/${id}`, signal)
}

export const ProgrammeService = {
    getAll,
    getById,
    create,
    update,
    destroy
}