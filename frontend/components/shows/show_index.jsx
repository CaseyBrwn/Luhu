import React from 'react';


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
            <h1>Site is Currently Under Contruction click the log out button to see that cool splash page again</h1>
            <button onClick={this.onClickHandler}>LOGOUT</button>
            </div>
        );
    }


}

export default ShowIndex;


