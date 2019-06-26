import React from 'react';
import _ from "lodash";
import {dispatch} from '../../../core/helpers/EventEmitter';
import {register, userValidation} from '../../../actions';
export default class EmailRegistrationDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            facebook_external_id: "",
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            birth_date: '',
            home_address: '',
            location: {},
            is_subscribed: 0,

            passwordHide: false,
            errors: {}
        };

        let data = JSON.parse(window.localStorage.getItem("facebookData") || "{}");
        this.state.first_name = data.first_name || "";
        this.state.facebook_external_id = data.id || "";
        this.state.last_name = data.last_name || "";
        this.state.email = data.email || "";
        if (data.email) {
            this.state.passwordHide = true;
        }
    }

    updateField(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    doRegister(e) {
        e.preventDefault();
 
        let method = this.state.passwordHide ? "FACEBOOK" : "EMAIL";
        let omit = ["errors", "passwordHide"];
        if (method === "FACEBOOK") {
            omit.push("password");
        } else {
            omit.push("facebook_external_id");
        }

        let data = _.merge(_.omit(this.state, omit), {method});
        userValidation(
            data,
            (r) => {
                // Store validated user information
                localStorage.setItem('regData', JSON.stringify(data));
               
                // Show popup with terms of application use
                location.hash = 'register/terms-of-use';
            },
            (e) => {
                const errors = {};
                Object.keys(e.responseJSON.errors).forEach((field) => {
                    const errorMsg = e.responseJSON.errors[field].pop();
                    if (field === 'password' && errorMsg.match(/confirmation/)) {
                        field = 'password_confirmation';
                    }
                    errors[field] = errorMsg;
                });
                this.setState({errors});
            }
        );
    }

    componentDidMount() {
        const context = this;
        const $homeAddress = this.refs.home_address;
        if ($homeAddress) {
            const context = this;
            const homeAddress = new google.maps.places.Autocomplete($homeAddress, config.autocomplete)
                .addListener('place_changed', function () {
                    const place = this.getPlace();
                    $homeAddress.blur();
                    context.setState({
                        location: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        },
                        home_address: place.vicinity
                    });
                });
        }

        const $date = this.refs.birth_date;
        if ($date) {
            this.calendar = rome(
                $date, {
                    time: false,
                    inputFormat: 'DD.MM.YYYY',
                    weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    dayFormat: 'D',
                    appendTo: $date.parentNode
                })
                .on('hide', function() {
                    context.setState({
                        birth_date: this.getDateString('DD.MM.YYYY')
                    });
                });
        }
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.calendar.hide();
        }
    }

    render() {
        return (
            <div className="registration-email">
                <div className="register-form register-form1">
                    <div className="fields clear">
                        <div className="column">
                                     <div className="form-controll register-left">
                                        <input type="text" className="input" name="first_name" value={this.state.first_name}
                                               onChange={this.updateField.bind(this)} placeholder="Vorname"/>
                                        <small className="color-red">{this.state.errors.first_name}</small>
                                    </div>
                              
                                     <div className="form-controll register-right">
                                        <input type="text" className="input" name="last_name" value={this.state.last_name}
                                               onChange={this.updateField.bind(this)} placeholder="Nachname"/>
                                        <small className="color-red">{this.state.errors.last_name}</small>
                                     </div>
                               
                                      <div className="form-controll register-left">
                                        <input type="text" className="input" name="email" value={this.state.email}
                                               onChange={this.updateField.bind(this)} placeholder="E-Mail-Adresse"/>
                                        <small className="color-red">{this.state.errors.email}</small>
                                     </div>
                                
                                      {
                                        !this.state.passwordHide &&
                                       
                                            <div className="form-controll register-right">
                                                <input type="password" className="input" name="password" value={this.state.password}
                                                       onChange={this.updateField.bind(this)} placeholder="Passwort"/>
                                                <small className="color-red">{this.state.errors.password}</small>
                                            </div>
                                            
                                        
                                     }
                          <div className="form-controll register-left">
                                        <input type="text" className="hidden" name="email" value={this.state.email}
                                               onChange={this.updateField.bind(this)} placeholder=" "/>
                                        <small className="color-red">&nbsp;</small>
                                     </div>
                                      {
                                        !this.state.passwordHide &&
                                       
                                           
                                            <div className="form-controll register-right">
                                                <input type="password" className="input" name="password_confirmation"
                                                       value={this.state.password_confirmation} onChange={this.updateField.bind(this)}
                                                       placeholder="Passwort wiederholen"/>
                                                <small className="color-red">{this.state.errors.password_confirmation}</small>
                                            </div>
                                        
                                     }
                          
                                     <div className="form-controll register-left">
                                        <input type="text" className="input" ref="birth_date" name="birth_date"
                                               value={this.state.birth_date || ''}
                                               onKeyUp={this.onKeyUp.bind(this)}
                                               onChange={this.updateField.bind(this)}
                                               placeholder="Geburtstag"/>
                                        <small className="color-red">{this.state.errors.birth_date}</small>
                                     </div>
                               
                                     <div className="form-controll register-right">
                                <input type="text" className="input" ref="home_address" name="home_address"
                                       placeholder="Wohnort"/>
                                <small className="color-red">{this.state.errors.home_address}</small>
                            </div>
                             
                    </div>
                    </div>
                    <div className="clear email-subscribe">
                        <div className="">
                            <input type="checkbox" id="email-subscribe"
                                   onChange={(e) => this.setState({is_subscribed: Number(e.target.checked)})}/>
                            <label htmlFor="email-subscribe">
                                <span>Newsletter und E-Mails abonnieren</span>
                            </label>
                        </div>
                        <div className="buttons right">
                            <button type="button" className="violet-button"
                                    onClick={this.doRegister.bind(this)}>Anfragen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
