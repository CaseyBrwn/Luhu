import React from 'react';
import { connect } from "react-redux";
import { closeModal2, openModal2 } from "../actions/modal_actions";
import { ShowShowPageContainer } from "./video_showpage/show_show_container";



class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        };
    }

    render(){
        if (!this.props.modal2){
          
            return false
         
        }else{
      
        return <ShowShowPageContainer info={this.props.modal2} />
        }
    } 
}

const msp = (state) => {
 
    return ({
        modal2: state.ui.modal2
    });
};

const mdp = (dispatch) => {

    return ({
        closeModal2: () => dispatch(closeModal2()),
        openModal2: (modal) => dispatch(openModal2(modal))
    });

};



export default connect(msp, mdp)(Modal2);