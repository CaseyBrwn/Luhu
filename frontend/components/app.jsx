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
import {Route} from 'react-router-dom';
import mystuff from './my_stuff/my_stuff_container'; 
import genresContainer from './genres/genres_container';


const App = () => (
    <div className="maindiv">
        <Modal />
        <RestrictRoute exact path="/shows/:showId" component={ShowShowPageContainer} />
        <RestrictRoute exact path="/movies/:movieId" component={MovieShowContainer} />
        <Route  path="/" component={ShowNavBar} />
        <Route exact path="/" component={ShowsIndexContainer}/>
        <Route exact path="/my-stuff" component={mystuff} />
        <Route exact path="/genres/:genreId" component={genresContainer} />
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/splash/login" component={LoginFormContainer} />
        <AuthRoute exact path="/splash/signup" component={SignupFormContainer} />
        <AuthRoute exact path='/splash'  component={SplashNav} />
        <AuthRoute exact path="/splash" component={Splash} />    
    </div>
);

export default App;
