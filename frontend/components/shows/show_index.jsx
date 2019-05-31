import React from 'react';
import ShowNavBar from './show_nav_bar/show_nav_bar_container';


class ShowIndex extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.props.logoutUser();
    }


    render() {

        return(

            <div>
                <div className="splash">
                    <div className="splash_image_container">
                        <img className="showimage" src="https://www.hulu.com/press/wp-content/uploads/2018/04/THT_S2_MQ-1600x520.jpg" alt=""/>
                    </div>
                    <footer className="splashfooter">
                        <a href="https://github.com/CaseyBrwn/Luhu://">LUHU GIT HUB</a>
                        <span>© 2019 LUHU</span>
                    </footer>

                </div>

                <div>
                    <h1>Site is Currently Under Contruction click the log out button to see that cool splash page again</h1>
                    <button onClick={this.onClickHandler}>LOGOUT</button>
                </div>
            </div>
        );
    }


}

export default ShowIndex;


