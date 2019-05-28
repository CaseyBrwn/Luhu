import React from "react";
import LoginFormContainer from "./Form/login_form_container";
import SignupFormContainer from "./Form/signup_form_container";
import SplashNav from "./greeting/greeting_container";
import {AuthRoute} from '../../util/rout_util';


class Splash extends React.Component{
    constructor(props){
        super(props);
    }


    render(){


        return(
            <div className="splash">
                    <AuthRoute path='/splash' component={SplashNav} />
                    <div className="splashform">
                    <AuthRoute exact path="/splash/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
                    </div>
                <img className="splashimage" src="https://cdn.stocksnap.io/img-thumbs/960w/UKO5Y5AIWZ.jpg" alt="Girl watching multiple tv sets stacked on eachother playing same thing." />
                
            </div>
        )

    }


}

export default Splash; 