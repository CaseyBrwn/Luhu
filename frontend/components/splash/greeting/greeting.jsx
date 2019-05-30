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
                this.onClickHandler = this.onClickHandler.bind(this);

        }

        componentDidMount() {
                window.addEventListener('scroll', this.scrollHandler);
        }

        componentWillUnmount() {
                window.removeEventListener('scroll', this.scrollHandler);
        }

        scrollHandler() {
                let pos = window.pageYOffset;
                if (pos === 0){
                this.setState({ navClass: "splashnav", signupClass: "splashsignup", loginClass: "splashlogin"});
                }else{
                this.setState({ navClass: "splashnavscroll", signupClass: "splashsignupscroll", loginClass: "splashloginscroll" });
                }
        }

        onClickHandler(e){
                this.props.openModal(e.target.value);
        }

        render(){
                return (

                        <div className={this.state.navClass}  >
                                <ul>
                                        <h1>luhu</h1>
                                </ul>
                                <ul className="splashclick">
                                        <li><button className={this.state.signupClass} value="signup" onClick={this.onClickHandler}>START YOUR FREE TRIAL</button></li>
                                        <li><button className={this.state.loginClass} value="login" onClick={this.onClickHandler}>LOG IN</button></li>
                                </ul>
                        </div>

                );
      
        }

};

export default SplashNav;