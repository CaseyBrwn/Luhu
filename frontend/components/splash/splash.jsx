import React from "react";
import SplashNav from "./greeting/greeting_container";
import {AuthRoute} from '../../util/rout_util';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import Footer from "../footer";

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: false
        };
    }

    newlink(){
        window.open("https://github.com/CaseyBrwn/Luhu");
    }

    newlinkPersonal(){
        window.open("https://caseybrwn.github.io/");
    }

    newlinkedIn() {
        window.open("https://www.linkedin.com/in/casey-brown-5162b258/");
    }

    render(){
 

        return(
            <div className="splash">
                    <div className="splash_image_container">
                        <img className="splashimage" src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2018-01/1600-lifestyle-background%402x.jpg" alt="Girl watching multiple tv sets stacked on eachother playing same thing." />
                    <img className="splashimage2" src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2019-01/1600-content-grid-2X_1.jpg?DGw4IvJIypp7ynwDtnAMYw17F719vdLP" />
                    </div>  
                    <ul className="splashtext">
                        <li><h1>All Your TV In One Place</h1></li>
                        <li className="splashtextWatch">Watch thousands of shows and movies, with plans starting at $5.99/month</li>
                    <li className="splashnetworks"> HBQ, SHOWMIME, CIMENAX, and STARS available as add-ons.</li>
                        <li><button className="splashlink" onClick={this.props.openModel}>START YOUR FREE TRIAL</button></li>
                        <li className="splashfree">Free trial availbile for new and eligible returning subscribers only.</li>
                    </ul>
                    {/* <Footer /> */}
                {/* <footer className="splashfooter">
                    <div>
                        <img onClick={this.newlink}className="githubicon" src="data:image/png;base64,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" />
                        <img onClick={this.newlinkPersonal} className="personalSite" src="https://png.pngtree.com/svg/20160806/personal_homepage__personal_information_center_124696.png" />
                        <img onClick={this.newlinkedIn} className="personalSite" src="data:image/png;base64,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" />
                    </div>
                        <span>© 2019 LUHU</span>
                </footer>  */}
                  
            </div>
        )

    }


}


const mdp = (dispatch) => {

    return({
        openModel: () => dispatch(openModal('signup'))
    })
}

export default connect(null, mdp)(Splash)