import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    get checked() {
        return this.state.checked;
    }

    onChange(e) {
        this.setState({checked: e.target.checked});
    }

    render() {
        return (
            <label className="checkbox-label">
                <input className="checkbox-input" checked={this.state.checked} onChange={this.onChange.bind(this)} type="checkbox" name=""/>
                <div className="checkbox-div"/>&nbsp;
                {this.props.text}
            </label>
        );
    }

};

Checkbox.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};