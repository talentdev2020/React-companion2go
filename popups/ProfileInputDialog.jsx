import React from 'react';
import { Link } from 'react-router';

export default class ProfileInputDialog extends React.Component {
  render() {
    return (
      <div className="popup-body">
        <div className="text">
          { this.props.message }
        </div>
        { this.props.disabledText &&
          <div className="form-controll">
            <input type="text" className="input disabled" defaultValue={ this.props.disabledText } disabled />
          </div>
        }
        <div className="form-controll">
          <input type="text" className="input" ref="input" name="email" defaultValue="" placeholder={ this.props.placeholder } autoFocus />
        </div>
        <div className="buttons">
          <a href="#" className="violet-button" onClick={(e) => {
              e.preventDefault();
              this.props.onPositiveButtonClick(this.refs.input);
          }}>Ändern</a>
          <a href="#" className="skip">Abbrechen</a>
        </div>
      </div>
    );
  }
}
