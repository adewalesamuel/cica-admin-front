import { NavLink } from "react-router-dom";

export function MainMenu(props) {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>

                        <li>
                            <NavLink exact="true" to="/" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i><span className="badge badge-pill badge-success float-right">3</span>
                                <span>Tableau de bord</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/administrateurs" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Administrateurs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/utilisateurs" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Utilisateurs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resumes" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Resumes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Categories</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/programmes" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Programmes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/packs" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Packs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/telechargements" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Telechargements</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/inscriptions" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Inscriptions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/paiement_gateways" className="waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Moyen de paiement</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}