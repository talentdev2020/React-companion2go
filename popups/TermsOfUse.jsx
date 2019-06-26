import React from "react";
import { browserHistory, Link } from "react-router";
import classNames from "classnames";
import { register as registerEmail } from "../../../actions";
import User from "../../../core/helpers/User";

export default class TermsOfUse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userAgree: false,
      more1:false,
      more2:false,
      more3:false

    };
  }

  redirectToBegin() {
    location.hash = "register";
  }

  getRegData() {
    try {
      const regData = JSON.parse(localStorage.getItem("regData"));
      if (regData) {
        return regData;
      }
      else {
        this.redirectToBegin();
      }
    }
    catch (e) {
      this.redirectToBegin();
    }
    return {};
  }

  componentDidMount() {
    this.getRegData();
  }

  doRegister(e) {
    e.preventDefault();

    if (!this.state.userAgree) {
      return false;
    }

    // Get registering user data
    const regData = this.getRegData();
     
    switch (regData.method)
    {
      case "EMAIL":
     
        this.doRegisterViaEmail(regData);
      break;

      case "FACEBOOK":
          this.doRegisterViaEmail(regData);
      break;

      default:
     
        this.redirectToBegin();
      break;
    }
  }
  more(param,e)
  {
    switch(param){
      case 1:
        this.setState({more1:!this.state.more1});
        break;
      case 2:
        this.setState({more2:!this.state.more2});
        break;
      case 3:
        this.setState({more3:!this.state.more3});
        break;
    }
  }
  doRegisterViaEmail(regData) {
     
    registerEmail(
      regData,
      ({ token, user }) => {
         localStorage.removeItem("regData");
         User.beginSession({ token, user });  
         location.hash = "register/confirm";
      } 
      
    );
  }

  render() {
    return (
      <div className="registration-agreements">
        <p className="more">
          Philosophy is considered a science but it is difficult to say, when one
          has to compare with an ordinary science, for example biology, or chemistry.
          This is a question that turns into a burning problem among the scientists
         ........
         {this.state.more1&&<span> and linguists all over the world. Can philosophy be a science? What does
          philosophy operate with? It operates with categories, which can be as wide
          and as interchangeable as one can only imagine. Ordinary science operates
          with definitions, which are quite limited in their field of research.
          Ordinary science uses terms and laws of that very science to continue the
          research, uniting with the others in very rare cases. Philosophy gets into
          the sense of every science trying to achieve results.</span>}
          </p>
          <div className="more-button">
          {this.state.more1&&<div>&nbsp;</div>}
            <u  onClick={this.more.bind(this,1)}>{this.state.more1&&<span>Less...</span>}{   !this.state.more1&&<span>Read more</span>}</u>
          
          </div>

          <p className="more">
          Philosophy is considered a science but it is difficult to say, when one
          has to compare with an ordinary science, for example biology, or chemistry.
          This is a question that turns into a burning problem among the scientists
         ........
         {this.state.more2&&<span> and linguists all over the world. Can philosophy be a science? What does
          philosophy operate with? It operates with categories, which can be as wide
          and as interchangeable as one can only imagine. Ordinary science operates
          with definitions, which are quite limited in their field of research.
          Ordinary science uses terms and laws of that very science to continue the
          research, uniting with the others in very rare cases. Philosophy gets into
          the sense of every science trying to achieve results.</span>}
          </p>
          <div className="more-button">
          {this.state.more2&&<div>&nbsp;</div>}
            <u  onClick={this.more.bind(this,2)}>{this.state.more2&&<span>Less...</span>}{   !this.state.more2&&<span>Read more</span>}</u>
          
          </div>

          <p className="more">
          Philosophy is considered a science but it is difficult to say, when one
          has to compare with an ordinary science, for example biology, or chemistry.
          This is a question that turns into a burning problem among the scientists
         ........
         {this.state.more3&&<span> and linguists all over the world. Can philosophy be a science? What does
          philosophy operate with? It operates with categories, which can be as wide
          and as interchangeable as one can only imagine. Ordinary science operates
          with definitions, which are quite limited in their field of research.
          Ordinary science uses terms and laws of that very science to continue the
          research, uniting with the others in very rare cases. Philosophy gets into
          the sense of every science trying to achieve results.</span>}
          </p>
          <div className="more-button">
          {this.state.more3&&<div>&nbsp;</div>}
             <u  onClick={this.more.bind(this,3)}>{this.state.more3&&<span>Less...</span>}{   !this.state.more3&&<span>Read more</span>}</u>
          
          </div>
       <div>
     
    </div>
       
        <div className="buttons clear">
          <div className="left">
            <input type="checkbox" id="agree-checkbox" onChange={(e) => this.setState({ userAgree: e.target.checked })} />
            <label htmlFor="agree-checkbox">
              <span>Ich akzeptiere die Allgemeinen Geschäftsbedingungen</span>
            </label>
          </div>
          <div className="right">
            <a href="" className={classNames("violet-button", { disabled: !this.state.userAgree })} onClick={this.doRegister.bind(this)}>Registrieren</a>
          </div>
        </div>
      </div>
    );
  }
}
