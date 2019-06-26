import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

export default class Invitation extends React.Component {

    static get STATE_NEW() {
        return 1;
    }

    static get STATE_ACCEPTED() {
        return 2;
    }

    static get STATE_REJECTED() {
        return 3;
    }

    mapState(state) {
        return ['',
            'new',
            'accepted',
            'declined',
        ][state];
    }

    render() {
        return (
            <div
                className={classNames('event-item clear', this.mapState(this.props.state), this.props.selected ? 'active' : null)}>
                {this.props.date && <div className="date">{this.props.date}</div>}
                {this.props.avatar &&
                <Link
                    to={this.props.avatarLink}
                    className="avatar"
                    style={this.props.avatar ? {backgroundImage: `url('${this.props.avatar}')`} : {}}></Link>}
                <div className="info">
                    {this.props.openLink}
                    <div className="heading-2">
                        <Link to={this.props.titleLink}>{this.props.title}</Link>
                    </div>
                    <div className="message">
                        {this.props.message}
                    </div>
                    {
                        this.props.chat &&
                        <Link className="chat-button" to={`/chat/via-request/${this.props.id}`}>Chat</Link>
                    }
                </div>
            </div>
        );
    }
}
