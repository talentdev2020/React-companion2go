import React from 'react';
import { browserHistory, Link } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EmailLoginDialog extends React.Component {

  constructor(props) {
    super(props);
  }
   onNextSearch(e) {
      
        browserHistory.push('/#');
        
    }
    onNextProfile(e) {
      
        browserHistory.push('/dashboard');
        
    }

 render() {
        return (
            <div className="wrapper text-left check-email1">
               
                <p className="text">
                    Stocking A Commercial Kitchen Finding High Quality Cookware Online Stocking A Commercial Kitchen
                    Finding High Quality Cookware Online
                     Stocking A Commercial Kitchen Finding High Quality Cookware Online Stocking A Commercial Kitchen
                    Finding High Quality Cookware Online
                </p>
                
                    
                    <div className="buttons reg-button">
                        <div className="left">
                        <button onClick={this.onNextSearch.bind(this)} type="submit" className="button violet-button">Ereignissuche</button>
                        </div>
                        <div className="right">
                        <button onClick={this.onNextProfile.bind(this)} type="submit" className="button violet-button">Mein Profil</button>
                        </div>
                    </div>
                

            </div>
          
        );
    }
}
