import React from 'react';
import {Link} from 'react-router';
import {dispatch} from '../../../core/helpers/EventEmitter';
import User from "../../../core/helpers/User";
import {loginSocial} from "../../../actions";
import SocialLogin from "../../../staticFiles/js/socialLogin";

export default class RegSwitchDialog extends React.Component {

    loginViaFacebook(e) {
        e.preventDefault();

        /**
         * Login into facebook and get user information
         */
        SocialLogin.facebook.login(
            (response) => {
                console.info('Login success:', response);

                // Registration in portal with facebook credentials
                loginSocial(
                    {
                        password: response.id,
                        // method      : 'FACEBOOK',
                        email: response.email,
                        // first_name   : response.first_name,
                        // last_name    : response.last_name,
                        // birth_date   : response.birth_date,
                        // home_address : response.home_address,
                    },
                    ({token, user}) => {
                        // Authorize and redirect to start page
                        User.beginSession({token, user});
                        location.hash = "";

                        console.log('Autentication via facebook success: ', success);
                    },
                    (error) => {
                        window.localStorage.setItem("facebookData", JSON.stringify(response));
                        window.location.hash = "#register/email";
                    }
                );
            },
            (error) => {
                console.error('Login fail:', error);
            }
        );
    }
 
    render() {
        return (
            <div className="registration-switch">
                <div className="register-options">
                    <a onClick={this.loginViaFacebook.bind(this)} href="#" className="btn facebook">
                        Mit Facebook anmelden
                    </a>
                     
                    <a href="#register/email" className="violet-button email">Mit E-Mail-Adresse</a>
                </div>
                <div className="hr"/>
                <div className="already-registered"><span>Hast du schon ein Konto?</span> <a href="#login"
                                                                                             className="text-bold">Einloggen</a>
                </div>
            </div>
        );
    }
}
