import { Api } from './Api';

const  ENPOINTS = {
    Administrateur: 'administrateurs',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Administrateur, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Administrateur}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Administrateur, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Administrateur}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Administrateur}/${id}`, signal)
}

export const AdministrateurService = {
    getAll,
    getById,
    create,
    update,
    destroy
}