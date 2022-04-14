import { Api } from './Api';

const  ENPOINTS = {
    Inscription: 'inscriptions',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Inscription, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Inscription}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Inscription, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Inscription}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Inscription}/${id}`, signal)
}

export const InscriptionService = {
    getAll,
    getById,
    create,
    update,
    destroy
}