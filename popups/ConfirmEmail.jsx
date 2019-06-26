import React from "react";
import { browserHistory, Link } from "react-router";
import classNames from "classnames";
import { sendEmail } from "../../../actions";
import User from "../../../core/helpers/User";
import *as emailjs from "emailjs-com"
export default class TermsOfUse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formEmailSent:"",
     email:""

    };
  }

  redirectToBegin() {

    location.hash = "register";
  }

  

  componentWillMount() {
    sendEmail(
            {email: User.data.email},
            () => {
               this.setState({formEmailSent: "Sent"});
                 
            },
            (e) => this.setState({formEmailSent: e.responseJSON.errors})
        );
       //   let user = this.state.event.email;
       // console.log(this.state.event);
       //  console.log(user);
      //  emailjs.init();
       // this.sendFeedback();
      

  }
/*sendFeedback() {
  var templateparams={
    from_name:"Hello Guy",
    to_name:"Greetings",
    subject:"verification",
    message_html:"<a href='https://c2go.atomicity.pro/#register/photo'>Automicity Confirm Email</a>"
  } 
    emailjs.send('gmail', "template_b4OgrZyJ", templateparams,"user_LSiHXbjo9fMBvfjdDaxbA")
      .then(res => {
        this.setState({
          formEmailSent: "email sent"
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }*/
  doRegister(e) {
    e.preventDefault();

   browserHistory.push('/register/photo')
  }
  
   

  render() {
    return (
      <div className="registration-agreements">
        <p className="more">
          Philosophy is considered a science but it is difficult to say, when one
          has to compare with an ordinary science, for example biology, or chemistry.
          This is a question that turns into a burning problem among the scientists
           and linguists all over the world. Can philosophy be a science? What does
          philosophy operate with? It operates with categories, which can be as wide
          and as interchangeable as one can only imagine. Ordinary science operates
          with definitions, which are quite limited in their field of research.
          Ordinary science uses terms and laws of that very science to continue the
          research, uniting with the others in very rare cases. Philosophy gets into
          the sense of every science trying to achieve results. 
        </p>
          <small>{this.state.formEmailSent}</small>
       <div>
      
    </div>
       
        {/*<div className="buttons clear">
          <div className="left">
            <button className="violet-button" onClick={this.redirectToBegin.bind(this)}>Decline</button>
          </div>
          <div className="right">
            <a href="#" className={classNames("violet-button")} onClick={this.doRegister.bind(this)}>Next Step</a>
          </div>
        </div>*/}
      </div>
    );
  }
}
