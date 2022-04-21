import { Link, useNavigate } from "react-router-dom";

import { Utils } from "../utils";
import { Services } from "../services";

export function Header(props) {
    const abortController = new AbortController();
    const navigate = useNavigate();

    const logout = event => {
        event.preventDefault();

        Services.AuthService.logout(abortController.signal)
        navigate('/auth', {replace: true});
    }
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <Link to="/" className="logo logo-dark">
                            <span className="logo-sm">k
                                <img src="assets/images/logo-sm-dark.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="20" />
                            </span>
                        </Link>

                        <Link to="/" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm-light.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="20" />
                            </span>
                        </Link>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                        <i className="mdi mdi-backburger"></i>
                    </button>

                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="mdi mdi-magnify"></span>
                        </div>
                    </form>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block d-lg-none ml-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-magnify"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-search-dropdown">
                
                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-flag-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="" src="assets/images/flags/us.jpg" alt="Header Language" height="14" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                
                            <a href="#" className="dropdown-item notify-item">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-2" height="12" /><span className="align-middle">Spanish</span>
                            </a>

                            <a href="#" className="dropdown-item notify-item">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-2" height="12" /><span className="align-middle">German</span>
                            </a>

                            <a href="#" className="dropdown-item notify-item">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-2" height="12" /><span className="align-middle">Italian</span>
                            </a>

                            <a href="#" className="dropdown-item notify-item">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="mr-2" height="12" /><span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="mdi mdi-fullscreen"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="mdi mdi-tune"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-bell-outline"></i>
                            <span className="badge badge-danger badge-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0 font-weight-medium text-uppercase"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="badge badge-pill badge-danger">New 3</span>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{maxHeight: '230px'}}>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="mdi mdi-cart"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-3.jpg /"
                                            className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Andrew Mackie</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">It will seem like simplified English.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="mdi mdi-package-variant-closed"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">One could refuse to pay expensive translators.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" className="text-reset notification-item">
                                    <div className="media">
                                        <img src="assets/images/users/avatar-4.jpg /"
                                            className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Dominic Kellway</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top">
                                <a className="btn-link btn btn-block text-center" href="##">
                                    <i className="mdi mdi-arrow-down-circle mr-1"></i> Load More..
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                alt="Header Avatar" />
                            <span className="d-none d-sm-inline-block ml-1">
                                {Utils.Auth.isLoggedIn() ? `${Utils.Auth.getUser().nom_prenom}`
                                : "Non connecté"}
                            </span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="##"><i className="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> Profile</a>
                            {/* <a className="dropdown-item" href="##"><i className="mdi mdi-credit-card-outline font-size-16 align-middle mr-1"></i> Billing</a>
                            <a className="dropdown-item" href="##"><i className="mdi mdi-account-settings font-size-16 align-middle mr-1"></i> Settings</a>
                            <a className="dropdown-item" href="##"><i className="mdi mdi-lock font-size-16 align-middle mr-1"></i> Lock screen</a> */}
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" onClick={logout}><i className="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</a>
                        </div>
                    </div>
        
                </div>
            </div>
        </header>
    )
}