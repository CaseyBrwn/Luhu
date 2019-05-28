import React from 'react';
import {AuthRoute, RestrictRoute} from '../util/rout_util';
import Splash from './splash/splash';
import ShowsIndex from "./shows/show.index";


const App = () => (
    <div>
        <RestrictRoute exact path="/" component={ShowsIndex}/>
        <AuthRoute path="/splash" component={Splash} />    
    </div>
);

export default App;
