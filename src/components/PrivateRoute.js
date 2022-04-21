import { Fragment } from "react";
import { useNavigate, Route } from "react-router-dom";
import { Utils } from "../utils";

export function PrivateRoute(props) {
    const navigate = useNavigate();
    if (!Utils.Auth.isLoggedIn()) {
        navigate('/auth');
        return <Fragment></Fragment>;
    }else {
        return <Route {...props} />
    }
}