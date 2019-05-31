import React from 'react';
import {AuthRoute, RestrictRoute} from '../util/rout_util';
import Splash from './splash/splash';
import ShowsIndexContainer from "./shows/show_index_container";
import SignupFormContainer from './splash/Form/signup_form_container';
import LoginFormContainer from './splash/Form/login_form_container';
import SplashNav from "./splash/greeting/greeting_container";
import Modal from "./modal";
import ShowNavBar from './shows/show_nav_bar/show_nav_bar_container';


const App = () => (
    <div>
        <Modal />
        <RestrictRoute exact path="/" component={ShowNavBar} />
        <RestrictRoute exact path="/" component={ShowsIndexContainer}/>
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/splash/login" component={LoginFormContainer} />
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute path='/splash'  component={SplashNav} />
        <AuthRoute path="/splash" component={Splash} />    
    </div>
);

export default App;
