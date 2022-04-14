export function MainMenu(props) {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>

                        <li>
                            <a href="index.html" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i><span className="badge badge-pill badge-success float-right">3</span>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="calendar.html" className=" waves-effect">
                                <i className="mdi mdi-calendar-month"></i>
                                <span>Calendar</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="mdi mdi-email-multiple-outline"></i>
                                <span>Email</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="email-inbox.html">Inbox</a></li>
                                <li><a href="email-read.html">Email Read</a></li>
                                <li><a href="email-compose.html">Email Compose</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}