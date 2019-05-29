import React from 'react';
import { Link } from 'react-router-dom';


const SplashNav = (props) => {
  
        return (
           
        <div className="splashnav">
                <ul>
                        <h1>Luhu</h1>
                </ul>
                <ul className="splashclick">
                        <li><Link className="splashsignup" to='/splash/signup'>START YOUR FREE TRIAL</Link></li>
                        <li><Link className="headerlink" to='/splash/login'>Log In</Link></li>
                </ul>
        </div>
          
        );

};

export default SplashNav;