import React from 'react';
import {dispatch} from '../../../core/helpers/EventEmitter';
import Partials from "../partials";

export default class EventRequestConfirmDialog extends React.Component {

    render() {
        return (
            <div className="popup-body">
                <div className="text">
                    {this.props.message}
                </div>
                <div>
                    <br/>
                    <Partials.Textarea ref="message" label="Message" maxLength={100}/>
                </div>
                <div className="buttons">
                    <a className="violet-button" onClick={(e) => {
                        e.preventDefault();
                        this.props.onConfirmButtonClick(this.props.intent, this.refs.message.value.trim());
                    }}>Ändern</a>
                    <a className="skip" onClick={(e) => {
                        e.preventDefault();
                        dispatch('popup:close')
                    }}>Abbrechen</a>
                </div>
            </div>
        );
    }
}
