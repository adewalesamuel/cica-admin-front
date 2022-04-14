import { Components } from "..";
import {Route, Router, Routes} from 'react-router-dom'
import { Views } from "../../views";

export function MainLayout(props) {
    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div id="layout-wrapper">
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <Routes>
                                <Route exact path="" element={<Views.DashboardView />} />
                            </Routes>
                        </div>
                    </div>
                    <Components.Footer />
                </div>
            </div>
        </>
    )
}