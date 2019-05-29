import React from 'react';
import { Link, Redirect} from 'react-router-dom';



class SplashNav extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        navClass: "splashnav",
                        signupClass: "splashsignup",
                        loginClass: "splashlogin"
                };
                this.scrollHandler = this.scrollHandler.bind(this);

        }

        componentDidMount() {
                window.addEventListener('scroll', this.scrollHandler);
        }

        componentWillUnmount() {
                window.removeEventListener('scroll', this.scrollHandler);
        }

        scrollHandler() {
                
                this.setState({ navClass: "splashnavscroll", signupClass: "splashsignupscroll", loginClass: "splashloginscroll" });
        }

        render(){
                return (

                        <div className={this.state.navClass} onScroll={this.scrollHandler} >
                                <ul>
                                        <h1>Luhu</h1>
                                </ul>
                                <ul className="splashclick">
                                        <li><Link className={this.state.signupClass} to='/splash/signup'>START YOUR FREE TRIAL</Link></li>
                                        <li><Link className={this.state.loginClass} to='/splash/login'>Log In</Link></li>
                                </ul>
                        </div>

                );
      
        }

};

export default SplashNav;