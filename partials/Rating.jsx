import React from 'react';
import classNames from 'classnames';

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [
        {
          id: 1,
          selected: false
        },
        {
          id: 2,
          selected: false
        },
        {
          id: 3,
          selected: false
        },
        {
          id: 4,
          selected: false
        },
        {
          id: 5,
          selected: false
        },
      ]
    };
  }

  onStarClick(star, e) {
    e.preventDefault();

    this.state.stars.map((s) => {
      s.selected = s.id === star.id;
    });

    this.setState({ stars: this.state.stars },
      () => this.props.onChange && this.props.onChange(6 - star.id)
    );
  }

  render() {
    return (
      <div className={`rating ${this.props.type}`}>
        <div className="progress" style={{ width: `${this.props.progress || 'auto'}` }}></div>
        {
          this.state.stars.map((star) => (
            <span key={star.id}
                  onClick={this.onStarClick.bind(this, star)}
                  className={classNames({ fix: star.selected })} />
          ))
        }
      </div>
    );
  }
}
