import React from "react";
import LoginFormContainer from "./Form/login_form_container";
import SignupFormContainer from "./Form/signup_form_container";
import SplashNav from "./greeting/greeting_container";
import {AuthRoute} from '../../util/rout_util';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: false
        };
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
                        <li className="splashfree">Free trial availbile for new and eligbile returning subscribers only.</li>
                    </ul>
                <footer className="splashfooter">
                    <a href="https://github.com/CaseyBrwn/Luhu://">LUHU GIT HUB</a>
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