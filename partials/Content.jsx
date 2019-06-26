import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}
