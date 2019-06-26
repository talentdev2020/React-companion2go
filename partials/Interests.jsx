import React from 'react';
import SVG from '../svg';
import Interest from './Interest.jsx';
import {categories} from '../../../actions';

export default class Interests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            interests: props.initialInterests || []
        };

        categories(
            ({data}) => {
                if (this.state.interests.length > 0) {
                    this.state.interests.forEach(id => {
                       data.forEach(({categories}) => {
                           let cat = categories.find(cat => id === cat.id);
                           cat && (cat.checked = true);
                        });
                    });
                }
                this.setState({categories: data});
                console.log(data);
            },
            (e) => console.log(e)
        );

    }

    get selectedItems() {
        return this.state.interests;
    }

    isTravel() {
        let result = false;
        if (this.state.interests.length > 0) {
            this.state.categories.filter(
               // ({categories}) => categories.filter(
                    (category) => {
                        if (category.checked && category.type === "travel") {
                            result = true;
                            return true;
                        }
                    })
           // );
        }

        return result;
    }

    onInterestChecked(id, checked) {

            /** If only one item alowed for selection */

        if (this.props.singleSelect) {

            this.state.interests = [];
            this.state.categories.map(
               

                    (category) => Object.assign(category, {checked: id === category.id})
               
            );
        }
        console.log(this.state.categories);
        if (checked) {
            this.state.interests.indexOf(id) === -1 && this.state.interests.push(id);
        } else {
            this.state.interests = this.state.interests.filter((itemId) => itemId !== id);
        }
        this.setState({interests: this.state.interests,});
    }
  
    render() {
        return (
            <div className="registration-interests">
                {this.props.title && <p className="heading-3">{this.props.title}</p>}
                {this.props.description && <p className="text">{this.props.description}</p>}
                <div className="sections">
                    {
                        this.state.categories.map(({id,  color,name,checked, cover_photo, categories: subcategories}) => (
                            <div key={id} className="section clear" style={{backgroundColor: color}}>
                                <div className="cover"
                                     style={{backgroundImage: `url('${config.staticFiles}${cover_photo}')`}}>
                                    <div className="gradient"
                                         style={{background: `linear-gradient(to right, transparent, ${color})`}}></div>
                                </div>
                               
                                <div className="label left">
                                    <div className="items left clear">
                                        <div className="item"  >
                                            <input type="checkbox" id={id} checked={checked}  onChange={(e) => this.onInterestChecked && this.onInterestChecked(id, e.target.checked)}/>
                                            <label htmlFor={id}>
                                                <span className="category-name">{name}</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                                <div className="items left clear">
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                {this.props.children}
            </div>
        );
    }
}
