import { Api } from './Api';

const  ENPOINTS = {
    Pack: 'packs',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Pack, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Pack}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Pack, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Pack}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Pack}/${id}`, signal)
}

export const PackService = {
    getAll,
    getById,
    create,
    update,
    destroy
}