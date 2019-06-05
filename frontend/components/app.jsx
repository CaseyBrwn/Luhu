import React from 'react';
import {AuthRoute, RestrictRoute} from '../util/rout_util';
import Splash from './splash/splash';
import ShowsIndexContainer from "./shows/show_index_container";
import SignupFormContainer from './splash/Form/signup_form_container';
import LoginFormContainer from './splash/Form/login_form_container';
import SplashNav from "./splash/greeting/greeting_container";
import Modal from "./modal";
import ShowNavBar from './shows/show_nav_bar/show_nav_bar_container';
import { ShowShowPageContainer} from './video_showpage/show_show_container';
import MovieShowContainer from './video_showpage/movie_show_container';
import VideoPlayerContainer from './VideoPlayer/video_player_container';
import {Route} from 'react-router-dom';


const App = () => (
    <div className="maindiv">
        <Modal />
        <RestrictRoute exact path="/shows/:showId/:episodeId" component={VideoPlayerContainer} />
        <RestrictRoute exact path="/shows/:showId" component={ShowShowPageContainer} />
        <RestrictRoute exact path="/movies/:movieId" component={MovieShowContainer} />
        <Route path="/" component={ShowNavBar} />
        <Route path="/" component={ShowsIndexContainer}/>
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/splash/login" component={LoginFormContainer} />
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute exact path='/splash'  component={SplashNav} />
        <AuthRoute exact path="/splash" component={Splash} />    
    </div>
);

export default App;
