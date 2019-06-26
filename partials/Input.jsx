import React from 'react';
import classNames from 'classnames';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentWillReceiveProps(props) {
    this.setState({ ...props });
  }

  reset() {
    this.setState({ value: '' }, () => this.refs.input.value = '');
  }

  render() {
    return (
      <div className="textarea-wrapper">
        <input
          ref="input"
          className={classNames('input', this.state.className)}
          placeholder={this.state.placeholder}
          maxLength={this.state.maxLength}
          defaultValue={this.state.value}
          name={this.state.name}
          onChange={(e) => {
            this.setState({ value: e.target.value });
            this.props.onChange && this.props.onChange(e.target.value);
          }}
        />
      { this.state.error && <small className="color-red left">{this.state.error}</small> }
      </div>
    );
  }
}
