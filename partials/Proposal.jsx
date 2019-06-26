import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { profilePhoto } from '../../../core/helpers/Utils';

export default class Proposal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div className="proposal swiper-slide">
        <div className="proposal-price">{this.state.data.price}€</div>
        <div className="proposal-category">Für Begleitperson</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.68056in" height="2.63889in" viewBox="0 0 553 190">
          <path fill="#dd1155" stroke="none"
                d="M 553.00,0.00
                   C 553.00,0.00 553.00,102.00 553.00,102.00
                     553.00,102.00 536.00,102.00 536.00,102.00
                     536.00,102.00 474.00,108.72 474.00,108.72
                     474.00,108.72 394.00,118.28 394.00,118.28
                     394.00,118.28 353.00,123.28 353.00,123.28
                     353.00,123.28 331.00,126.00 331.00,126.00
                     331.00,126.00 331.00,143.00 331.00,143.00
                     330.99,149.50 330.11,159.20 327.17,165.00
                     320.29,178.56 300.00,188.92 285.00,188.92
                     272.49,188.92 253.01,182.09 241.00,178.00
                     241.00,178.00 176.00,156.33 176.00,156.33
                     176.00,156.33 153.00,148.67 153.00,148.67
                     149.42,147.47 143.60,145.21 140.00,145.18
                     140.00,145.18 103.00,153.63 103.00,153.63
                     103.00,153.63 41.00,169.15 41.00,169.15
                     41.00,169.15 0.00,179.00 0.00,179.00
                     0.00,179.00 0.00,0.00 0.00,0.00
                     0.00,0.00 553.00,0.00 553.00,0.00 Z" />
        </svg>
        <div className="picture" style={{ backgroundImage: `url('${profilePhoto(this.state.data.user)}')` }}>
          <div className="author-rank">
            <i className="star" data-count={this.state.data.user.rank}></i>
          </div>
        </div>
        <div className="details">
          <div className="author">
            Mit {this.state.data.user.first_name || this.state.data.user.last_name}
          </div>
          <div className="age">
            {this.state.data.user.age} Jahre
          </div>
          <div className="buttons clear">
            <Link to={`/profile/${this.state.data.user.id}/information`} className="button">Mehr</Link>
            <Link to={`/proposal/${this.state.data.id}/details`} className="button violet-button">Anfragen</Link>
          </div>
        </div>
      </div>
    );
  }
}
