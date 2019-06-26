import React, {Component} from "react";
import {eventAddPersonalMessage} from '../../../actions';
import {Link, browserHistory} from 'react-router';
import {set, get,clear,  commit} from "../../../core/helpers/EventUtil";
import User from '../../../core/helpers/User';
import {eventAdd, categories} from "../../../actions";
import Popups from "../popups/index";
import {dispatch} from "../../../core/helpers/EventEmitter";
class Check extends Component {

    constructor(props) {
        super(props);

        this.state = {
            telephone: get("telephone") || User.phone || "",
            event: {},
            errors: {},
            user:{}
            
        };  

    }

   initDialogs() {
        this.regComplete = <Popups.RegComplete/>;
    }
 componentWillMount() {

         
        //let event = JSON.parse(localStorage.getItem('event') || '{}');
        let event = JSON.parse(localStorage.getItem('event') || '{}');
        let user = User.data;
        console.log(event);
        this.setState({user, user});
        this.setState({event, event});
        console.log(this.state.event);
        this.initDialogs();

    }
    onNextStep(e) {
      
        set("telephone",this.state.telephone);

        this.state.event.telephone = this.state.telephone;
        console.log(this.state.event);  

        
        eventAdd(this.state.event, () => {
            //browserHistory.push('/event-add/confrim');
            clear();
            dispatch('popup:show', {
                title: 'Are you confrim ?',
                body: this.regComplete
            });
        }, (e) => {
             this.setState({errors: e.responseJSON.errors})
        });
    }

    render() {
        return (
            <div className="wrapper text-left check-email">
                <p className="text">
                    Stocking A Commercial Kitchen Finding High Quality Cookware Online Stocking A Commercial Kitchen
                    Finding High Quality Cookware Online
                     Stocking A Commercial Kitchen Finding High Quality Cookware Online Stocking A Commercial Kitchen
                    Finding High Quality Cookware Online
                </p>
                
                    <div>
                        <span>Email: {this.state.user.email}</span>
                    </div> 
                    <div>&nbsp;
                    </div>
                    <div>
                        <span>Telephone:</span>
                        <input  type="text"
                                    className="check-input"
                                    ref="telephone"
                                    placeholder="Telephone"
                                    maxLength="25"
                                    style={{paddingLeft: 15 }}
                                    value={this.state.telephone}
                                    onChange={(e) => this.setState({telephone: e.target.value})}
                                    autoFocus
                                />
                            <small className="color-red left">{(this.state.errors.telephone || []).join(' ')}</small>          
                    </div>
                    <div className="check-bottom">&nbsp;</div>
                    <div className="buttons">
                        <div className="div-left">
                        
                        </div>
                        <div className="right">
                        
                        </div>
                    </div>
                    <div>&nbsp;</div>

                    <div className="clear email-subscribe">
                            
                            <div className="left">
                                <button onClick={this.onNextStep.bind(this)} type="submit" className="button violet-button">Weiter</button>
                            </div>
                            <div className="right check-margin">
                            
                                <Link  onClick={(e) => {e.stopPropagation(); browserHistory.goBack()}} className="button default-button">Abbrechen</Link>
                            </div>
                        </div>

            </div>
          
        );
    }
}
export default Check;
