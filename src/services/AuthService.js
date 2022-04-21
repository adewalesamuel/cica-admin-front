import { Utils } from '../utils';
import { Api } from './Api';

const  ENPOINTS = {
    Login: 'admin-login',
    Logout: 'admin-logout'
};

const login = (payload, signal) => {
    return Api.post(ENPOINTS.Login, payload, signal)
}

const logout = (signal) => {
    Utils.Auth.removeSessionToken();
    return Api.post(ENPOINTS.Logout, null, signal)
}

export const AuthService = {
    login,
    logout
}