import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class DefaultConfirmDialog extends React.Component {
  render() {
    return (
      <div className="popup-body">
        <div className="text">
          { this.props.message }
        </div>
        <div className="buttons">
          <a href="#" className="violet-button" onClick={ this.props.onConfirmButtonClick }>{ this.props.confirmButtonText }</a>
          <a href="#" className="skip" onClick={(e) => { e.preventDefault(); dispatch('popup:close')}}>{ this.props.cancelButtonText }</a>
        </div>
      </div>
    );
  }
}
