import React from "react";
import {connect} from "react-redux";
import {createUserShow, deleteUserShow} from "../../../actions/content_actions";

class MyShowButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detailhover: false,
        };
        this.handledetailMouseEnter = this.handledetailMouseEnter.bind(this);
        this.handledetailMouseLeave = this.handledetailMouseLeave.bind(this);
        this.addtoMyStuff = this.addtoMyStuff.bind(this);
        this.removeFromMyStuff = this.removeFromMyStuff.bind(this);
    }

    handledetailMouseEnter() {
        this.setState({ detailhover: true });
    }

    handledetailMouseLeave() {
        this.setState({ detailhover: false });
    }
   
    addtoMyStuff(){
        this.props.createUserShow(this.props.content.id)
    }

    removeFromMyStuff() {
        this.props.deleteUserShow(this.props.content.id)
    }

    render() {

        let color = "white";
        if (this.props.color === "black") {
            color = "black";
        }


        let detailsbuttoncontainer = `detailsbuttoncontainer`;
        let materialclassName = `material-icons details ${color}`;
        let gotodetailsContainer = 'gotodetailsContainer';

        if (this.state.detailhover) {
            detailsbuttoncontainer = "detailsbuttoncontainer2";
            materialclassName = `material-icons details2 ${color}`;
            gotodetailsContainer = 'gotodetailsContainer2';
        }

        if (!this.props.user_shows.includes(this.props.content.id)){
                
            return (
              
                <div className={detailsbuttoncontainer}>
                    <div className={materialclassName} onClick={this.addtoMyStuff} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>add</div>
                    <div className={gotodetailsContainer}>
                        <div className="textdetailscontainer">
                            <div className="gotodetails">Add to MyStuff</div>
                        </div>
                        <div className="material-icons downarrowcontainer">
                            <div className="material-icons downarrow">arrow_drop_down</div>
                        </div>
                    </div>
                </div>

            )

        }else{
            
            return (
                <div className={detailsbuttoncontainer}>
                    <div className={materialclassName} onClick={this.removeFromMyStuff} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>check</div>
                    <div className={gotodetailsContainer}>
                        <div className="textdetailscontainer">
                            <div className="gotodetails">Remove from MyStuff</div>
                        </div>
                        <div className="material-icons downarrowcontainer">
                            <div className="material-icons downarrow">check</div>
                        </div>
                    </div>
                </div>

        )

        }

    }
}

const msp = (state) =>{
  
   let user_shows = state.entities.users[Object.keys(state.entities.users)[0]].show_ids
  
    return({
        user_shows: user_shows
    })
}

const mdp = (dispatch) =>{

    return({
        createUserShow: (show_id) => dispatch(createUserShow(show_id)),
        deleteUserShow: (show_id) => dispatch(deleteUserShow(show_id))
    })
}


export default connect(msp, mdp)(MyShowButton)

