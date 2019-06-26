import React from 'react';
import { Link, browserHistory } from 'react-router';
import { profilePhoto } from '../../../core/helpers/Utils';
import Rating from './Rating.jsx';

export default class Review extends React.Component {
  render() {
    return (
      <div className="review clear">
        <div className="avatar-rating clear">
          <div className="avatar">
            <a href={`/profile/${this.props.reviewer.id}/information`}>
              <img src={ profilePhoto(this.props.reviewer) } alt={ `${this.props.reviewer.first_name} ${this.props.reviewer.last_name}` } />
            </a>
          </div>
          <Rating type="percentage" progress={ `${this.props.reviewer.rank * 20 + 3}%` } />
        </div>
        <div className="text user-name">
          { this.props.reviewer.first_name } { this.props.reviewer.last_name }
        </div>
        <div className="text">
          { this.props.message }
        </div>
      </div>
    );
  }
}
