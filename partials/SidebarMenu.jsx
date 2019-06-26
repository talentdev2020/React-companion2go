import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import User from '../../../core/helpers/User';

export default class SidebarMenu extends React.Component {

  render() {
    return (
      <div className="menu-wrapper">
        <div className="heading-2">
          Profil
        </div>
        <nav className="sidebar-menu">
          <div className="menu-item">
            <Link to={`/profile/settings`} activeClassName="active">
              Persönliche Daten ändern
            </Link>
          </div>
          <div className="menu-item">
            <Link to={`/profile/information`} activeClassName="active">
              Profilinformationen
            </Link>
          </div>
          <div className="menu-item">
            <Link to={`/profile/contacts`} activeClassName="active">
              Bestätigte Daten
            </Link>
          </div>
        </nav>

        <div className="heading-2">
          Einstellungen
        </div>
        <nav className="sidebar-menu">
          <div className="menu-item">
            <Link to={`/profile/notifications`} activeClassName="active">
              Benachrichtigungen
            </Link>
          </div>
          <div className="menu-item">
            <Link to={`/profile/payments-history`} activeClassName="active">
              Zahlungsübersicht
            </Link>
          </div>
          <div className="menu-item">
            <Link to={`/profile/password-change`} activeClassName="active">
              Kontoneinstellungen
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
