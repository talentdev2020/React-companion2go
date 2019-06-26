import React from 'react';
import {Link, browserHistory} from 'react-router';
import {dispatch} from '../../../core/helpers/EventEmitter';

export default class RequestComplete extends React.Component {

    popupClose(e) {
        e.preventDefault();
        dispatch('popup:close');
        browserHistory.goBack();
    }

    render() {
        return (
            <div className="registration-complete">
                <p className="text">
                    Philosophy is considered a science but it is difficult to say, when one has to compare with an
                    ordinary science, for example biology, or chemistry.
                </p>
                <div className="checkbox">
                    <img src={require('../../../staticFiles/img/icons/checkbox-big.png')} alt="Completed"/>
                </div>
                <div className="buttons clear">
                    <Link to={`/proposal/${this.props.proposal}/details`} className="violet-button">Weitersuchen</Link>
                    <Link href="#" className="main-profile" onClick={this.popupClose.bind(this)}>Fertig</Link>
                </div>
            </div>
        );
    }
}
