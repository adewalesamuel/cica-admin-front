import { Api } from './Api';

const  ENPOINTS = {
    : 's',
};

const getAll = signal => {
    return Api.get(ENPOINTS., signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS., payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.}/${id}`, signal)
}

export const Service = {
    getAll,
    getById,
    create,
    update,
    destroy
}