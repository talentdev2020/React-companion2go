import React from 'react';
import classNames from 'classnames';
import {dispatch, subscribe} from '../helpers/EventEmitter';

export default class Popup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {popup: null};

        subscribe('popup:show', ({title, body}) => {
            this.setState({
                popup: {title, body}
            });
        });

        subscribe('popup:close', () => {
            $("html, body").removeClass("no-scroll");
            this.closePopup();
        });
    }

    componentWillMount() {
        $("html, body").addClass("no-scroll");
    }

    closePopup() {
        // Close animation
        $(this.refs['popup']).removeClass('opened');
        setTimeout(() => this.setState({popup: null}, () => dispatch('popup:closed')), 50);
    }

    get initialState() {
        return {
            title: '',
            display: 'none',
            body: function () {
                return null;
            }
        };
    }

    render() {
        if (!this.state.popup) {
            return null;
        }

        // Get class name if defined
        const className = this.state.popup.body && this.state.popup.body.props
            ? this.state.popup.body.props.className
            : null;

        return (
            <div className="popup-wrapper opened" ref="popup">
                <div className={classNames('popup', className)}>
                    <i className="close" onClick={this.closePopup.bind(this)}/>
                    <div className="heading-2">
                        {this.state.popup.title}
                    </div>
                    {this.state.popup.body}
                </div>
            </div>
        );
    }
}
