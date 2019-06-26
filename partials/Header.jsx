import React from "react";
import classNames from "classnames";
import {Link} from "react-router";
import User from "../../../core/helpers/User";
import {subscribe, unsubscribe} from "../../../core/helpers/EventEmitter";

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasSession: User.hasSession,
            profileType: User.profileType,

            menuOpened: false
        };

        this.onUserLogin = this.onUserLoginHandler.bind(this);
        this.onUserLogout = this.onUserLogoutHandler.bind(this);
    }

    onUserLoginHandler() {
        this.setState({
            hasSession: User.profileType,
            profileType: User.profileType
        });
    }

    onUserLogoutHandler() {
        this.setState({
            hasSession: User.profileType,
            profileType: User.profileType
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.hasSession !== User.hasSession) {
            this.setState({hasSession: User.hasSession})
        }
    }

    componentWillMount() {
        subscribe("user:loggedin", this.onUserLogin);
        subscribe("user:loggedout", this.onUserLogout);
    }

    componentWillUnmount() {
        unsubscribe("user:loggedin", this.onUserLogin);
        unsubscribe("user:loggedout", this.onUserLogout);
    }

    get contextMenuClass() {
        return "context-menu " + (this.state.menuOpened ? "" : "hidden");
    }

    toggleMenu() {
        this.setState(prevState => {
            return {menuOpened: !prevState.menuOpened};
        });
    }

    get canCreateEvent() {
        return (Number(this.state.profileType) === 1 || isNaN(this.state.profileType));
    }

    get createEventPage() {
        return "/event-add/categories";
    }

    changeHash(e) {
        e.preventDefault();

        window.location.hash = e.target.getAttribute("href");
    }

    checkAuth(e) {
        if (!User.hasSession) {
            e.preventDefault();
            window.localStorage.setItem("triedToCreateOffer", "true");
            window.location.hash = "#login";
        }
    }

    render() {
        return (
            <header>
                <div className="header-wrapper clear">
                    <div className="logo left">
                        <Link to="/"></Link>
                    </div>
                    <nav className="menu right">
                        <div className="menu-item">
                            <Link to="/" className="ico-search">Event suchen</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/how-it-works" activeClassName="active">So funktioniert"s</Link>
                        </div>
                        {!this.state.hasSession &&
                        <div className="menu-item">
                            <a href="#register" onClick={this.changeHash.bind(this)}>Registrieren</a>
                        </div>
                        }
                        {!this.state.hasSession &&
                        <div className="menu-item">
                            <a href="#login" onClick={this.changeHash.bind(this)}>Einloggen</a>
                        </div>
                        }

                        {this.state.hasSession &&
                        <div className="menu-item">
                            <Link to="/dashboard">Neuigkeiten</Link>
                        </div>
                        }
                        {this.state.hasSession &&
                        <div className="menu-item avatar-container" onClick={this.toggleMenu.bind(this)}>
                            <img className="menu-avatar" src={User.profilePhoto}/>

                            <div className={this.contextMenuClass}>
                                <ul>
                                    <li>
                                        <Link to="/profile/settings">Einstellungen</Link>
                                    </li>
                                    <li>
                                        <Link to="/logout">Ausloggen</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        }
                    </nav>
                    {this.canCreateEvent &&
                        <div className="add-event right">
                            <Link to={this.createEventPage} onClick={this.checkAuth.bind(this)} className="btn" href="#">Angebot erstellen</Link>
                        </div>
                    }
                </div>
            </header>
        );
    }
}
