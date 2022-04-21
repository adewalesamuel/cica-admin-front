import {Route, Routes} from 'react-router-dom'
import { Views } from "../../views";

export function AuthLayout(props) {
    window.document.body.className = "bg-primary bg-pattern";

    return (
        <>
            <Routes>
                <Route exact path="connexion" element={<Views.LoginView />} />
                <Route exact path="" element={<Views.LoginView />} />
            </Routes>
        </>
    )
}