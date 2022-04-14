import { Api } from './Api';

const  ENPOINTS = {
    Utilisateur: 'utilisateurs',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Utilisateur, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Utilisateur}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Utilisateur, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Utilisateur}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Utilisateur}/${id}`, signal)
}

export const UtilisateurService = {
    getAll,
    getById,
    create,
    update,
    destroy
}