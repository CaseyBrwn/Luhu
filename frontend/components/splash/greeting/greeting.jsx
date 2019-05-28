import React from 'react';
import { Link } from 'react-router-dom';


const SplashNav = (props) => {
  
        return (
           
                <div className="splashnav">
                    <ul>
                    <li><h1>Luhu</h1></li>
                    <li><Link to='/splash/signup'>START YOUR FREE TRIAL</Link></li>
                    <li><Link to='/splash/login'>Log In</Link></li>
                    </ul>
                </div>
          
        );

};

export default SplashNav;