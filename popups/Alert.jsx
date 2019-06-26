import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class Alert extends React.Component {
    render() {
        return (
            <div className="popup-body">
                <div className="text" style={{marginTop: 20}}>
                    { this.props.message }
                </div>
                {/*<div className="buttons">*/}
                    {/*/!*<a href="#" className="violet-button" onClick={ this.props.onConfirmButtonClick }>{ this.props.confirmButtonText }</a>*!/*/}
                    {/*<a style={{marginTop: 20}} href="#" className="violet-button" onClick={(e) => { e.preventDefault(); dispatch('popup:close')}}>Ok</a>*/}
                {/*</div>*/}
            </div>
        );
    }
}
