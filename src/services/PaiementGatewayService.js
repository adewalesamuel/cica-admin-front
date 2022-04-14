import { Api } from './Api';

const  ENPOINTS = {
    PaiementGateway: 'paiementgateways',
};

const getAll = signal => {
    return Api.get(ENPOINTS.PaiementGateway, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.PaiementGateway}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.PaiementGateway, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.PaiementGateway}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.PaiementGateway}/${id}`, signal)
}

export const PaiementGatewayService = {
    getAll,
    getById,
    create,
    update,
    destroy
}