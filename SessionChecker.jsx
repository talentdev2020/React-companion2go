import React from "react";
import User from "../core/helpers/User";

export default function (WrappedComponent) {
    return class extends React.Component {

        componentDidMount() {
            setTimeout(() => {
                if(!User.hasSession) {
                    window.location.hash = "#login";
                }
            }, 500);
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}