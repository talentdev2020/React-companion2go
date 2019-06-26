import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="columns clear">
            <div className="column left">
              <nav className="menu">
                <div className="menu-item">
                  <Link to='/'>Startseite</Link>
                </div>
                <div className="menu-item">
                  <Link to='/'>Event suchen</Link>
                </div>
                <div className="menu-item">
                  <Link to='/event-add'>Angebot erstellen</Link>
                </div>
                <div className="menu-item">
                  <Link to='/how-it-works'>So funktioniert's</Link>
                </div>
              </nav>
            </div>
            <div className="column left">
              <nav className="menu">
                <div className="menu-item">
                  <Link to='#register'>Registrieren</Link>
                </div>
                <div className="menu-item">
                  <Link to='#login'>Einloggen</Link>
                </div>
                <div className="menu-item">
                  <a href={require('../../../staticFiles/files/terms.odt')} download="Allgemeine_Geschäftsbedinungen_Pilot.odt">Nutzungsbedingungen</a>
                </div>
                <div className="menu-item">
                  <a href={require('../../../staticFiles/files/privacy.odt')} download="Datenschutzerklärung_Prototyp_12-12-2017.odt">Datenschutz</a>
                </div>
              </nav>
            </div>
            <div className="column left clear">
              <div className="footer-logo left">
                <a href="#">
                  <img src={require('../../../staticFiles/img/logo-footer.png')} alt="C2Go" />
                </a>
              </div>
              <div className="left">
                <p className="copyrights">
                  © Companion2Go GbR
                </p>
                <p className="address">
                  c/o Social Impact Lab<br/>
                  Falkstraße 5<br/>
                  60487 Frankfurt am Main
                </p>
                <div className="socials">
                  <div className="social">
                    <a href="#" className="fa fa-facebook"/>
                  </div>
                  <div className="social">
                    <a href="#" className="fa fa-linkedin"/>
                  </div>
                  <div className="social">
                    <a href="#" className="fa fa-instagram"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hr"/>
          <div className="feefback">
            <p className="text-center">Was können wir verbessern?</p>
            <a href="#" className="btn">Feedback geben</a>
          </div>
        </div>
      </footer>
    );
  }
}
