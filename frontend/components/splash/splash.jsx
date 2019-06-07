import React from "react";
import SplashNav from "./greeting/greeting_container";
import {AuthRoute} from '../../util/rout_util';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: false
        };
    }

    newlink(){
        window.open("https://github.com/CaseyBrwn/Luhu");
    }

    render(){
 

        return(
            <div className="splash">
                    <div className="splash_image_container">
                        <img className="splashimage" src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2018-01/1600-lifestyle-background%402x.jpg" alt="Girl watching multiple tv sets stacked on eachother playing same thing." />
                    <img className="splashimage2" src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2019-01/1600-content-grid-2X_1.jpg?DGw4IvJIypp7ynwDtnAMYw17F719vdLP" />
                    </div>  
                    <ul className="splashtext">
                        <li><h1>All Your TV In One Place</h1></li>
                        <li className="splashtextWatch">Watch thousands of shows and movies, with plans starting at $5.99/month</li>
                    <li className="splashnetworks"> HBQ, SHOWMIME, CIMENAX, and STARS available as add-ons.</li>
                        <li><button className="splashlink" onClick={this.props.openModel}>START YOUR FREE TRIAL</button></li>
                        <li className="splashfree">Free trial availbile for new and eligible returning subscribers only.</li>
                    </ul>
                <footer className="splashfooter">
                    <div>
                        <img onClick={this.newlink}className="githubicon" src="data:image/png;base64,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" />
                    </div>
                        <span>© 2019 LUHU</span>
                </footer> 
                  
            </div>
        )

    }


}


const mdp = (dispatch) => {

    return({
        openModel: () => dispatch(openModal('signup'))
    })
}

export default connect(null, mdp)(Splash)