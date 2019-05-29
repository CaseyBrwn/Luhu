import React from 'react';
import {AuthRoute, RestrictRoute} from '../util/rout_util';
import Splash from './splash/splash';
import ShowsIndex from "./shows/show.index";
import SignupFormContainer from './splash/Form/signup_form_container';
import LoginFormContainer from './splash/Form/login_form_container';
import SplashNav from "./splash/greeting/greeting_container";


const App = () => (
    <div>
        <Modal />
        <RestrictRoute exact path="/" component={ShowsIndex}/>
        <AuthRoute exact path="/splash/login" component={LoginFormContainer} />
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute path='/splash'  component={SplashNav} />
        <AuthRoute path="/splash" component={Splash} />    
    </div>
);

export default App;
