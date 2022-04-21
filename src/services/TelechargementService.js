import { Api } from './Api';

const  ENPOINTS = {
    Telechargement: 'telechargements',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Telechargement, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Telechargement}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.postFormData(ENPOINTS.Telechargement, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.postFormData(`${ENPOINTS.Telechargement}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Telechargement}/${id}`, signal)
}

export const TelechargementService = {
    getAll,
    getById,
    create,
    update,
    destroy
}