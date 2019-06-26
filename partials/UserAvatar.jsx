import React from 'react';
import User from '../../../core/helpers/User';
import {post} from 'axios';
import Prop from "prop-types";

export default class UserAvatar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            profilePhoto: User.profilePhoto,
            error: ""
        };
    }

    onProfilePhotoFormSubmit(e) {
        e.preventDefault();

        this.setState({error: ""});
        
        post(
            `${config.backUrl}/api/user/profile-photo`,
            new FormData(e.target),
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${User.token}`
                }
            }
        )
            .then(({data}) => {
                // Update user session information
                User.data = data.user;

                // Update profile photo image
                this.setState({profilePhoto: User.profilePhoto});
                //this.state.profilePhoto = User.profilePhoto;
                this.props.onLoaded && this.props.onLoaded();
                 
            })
            .catch(e => {
                this.setState({error: e.response.data.error});
            });
    }

    reload() {
        this.setState({profilePhoto: User.profilePhoto});
    }

    profilePhotoPictureSelect() {
        this.refs['profile-photo'].click();
    }

    render() {
        return (
            <div>
                <div className="avatar" style={{backgroundImage: `url('${this.state.profilePhoto}')`}}>
                    <form style={{display: 'none'}} onSubmit={this.onProfilePhotoFormSubmit.bind(this)}>
                        <input type="file" accept=".png,.jpg,.jpeg" name="profile-photo" ref="profile-photo"
                               onChange={(e) => this.refs['upload-profile-photo-btn'].click()}/>
                        <input type="submit" ref="upload-profile-photo-btn" value=""/>
                    </form>
                    {this.props.children}
                </div>
                {
                    this.state.error &&
                    <div style={{color: "red"}}>
                        {this.state.error}
                    </div>
                }
            </div>
        );
    }
}

UserAvatar.props = {
    onLoaded: Prop.func.isRequired
};
