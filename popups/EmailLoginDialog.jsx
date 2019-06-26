import React from 'react';
import {withRouter} from 'react-router';
import {dispatch} from '../../../core/helpers/EventEmitter';
import {emailLogin} from '../../../core/middleware/Auth';

export default withRouter(class EmailLoginDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            method: 'email',
            error: ''
        };
    }

    updateField(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    doLogin(e) {
        e.preventDefault();
  
        emailLogin(this.state,
            (r) => {
           
                dispatch('user:loggedin', {...r, type: 'email'});
                
              
                if (  r.user.settings.profile_type === 1) {
                   
                    //localStorage.removeItem("triedToCreateOffer");

                    this.props.router.push("/event-add/categories");
                }
                else
                   this.props.router.push("/");   

            },
            (e) => this.setState({error: 'Email or password is incorrect.'})
        );
    }

    render() {
        return (
            <div className="registration-email ">
                <div className="register-form">
                    <form action="" method="post" onSubmit={this.doLogin.bind(this)}>
                        <div className="clear">
                            <div className="column w100p">
                                <div className="form-controll">
                                    <input type="text" className="input" name="email" value={this.state.email}
                                           onChange={this.updateField.bind(this)} placeholder="E-Mail-Adresse"/>
                                    <small className="color-red">{this.state.error}</small>
                                </div>
                            </div>
                            <div className="column w100p">
                                <div className="form-controll">
                                    <input type="password" className="input" name="password" value={this.state.password}
                                           onChange={this.updateField.bind(this)} placeholder="Passwort"/>
                                </div>
                            </div>
                        </div>
                        <div className="clear email-subscribe">
                            <div className="left">
                                <input type="checkbox" id="remember-me"/>
                                <label htmlFor="remember-me">
                                    <span>Denk an mich</span>
                                </label>
                            </div>
                            <div className="right">
                                <button type="submit" className="violet-button" name="">Einloggen</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});
