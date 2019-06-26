import React from 'react';

export default class Interest extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const id = 'interest-'.concat(this.props.model.id);
        return (
            <div className="item">
                <input type="checkbox" id={id} checked={this.props.model.checked}
                       onChange={(e) => this.props.onCheckedChange && this.props.onCheckedChange(this.props.model.id, e.target.checked)}/>
                <label htmlFor={id}>
                    <span className="category-name">{this.props.model.name}</span>
                </label>
                <div className="picture"
                     style={{backgroundImage: `url('${config.staticFiles}/${this.props.model.cover_photo}')`}}>
                    <div className="overlay"/>
                </div>
            </div>
        );
    }
}
