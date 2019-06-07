import React from 'react';
import { connect } from "react-redux";
import LoginFormContainer from './splash/Form/login_form_container';
import SignUpFormContainer from './splash/Form/signup_form_container';
import {closeModal, openModal} from "../actions/modal_actions";
import Videoplayer from './VideoPlayer/video_player_container';



class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

 
    componentDidMount(){
 
    

    }

    componentDidUpdate(){


        if (this.state.mounted === false) {
            setTimeout(() => {
                this.setState({ mounted: true });
            }, 1000);
        }
    }

    render() {
        let component = null;
        if(!this.props.modal && this.state.mounted){
            this.setState({ mounted: false });
            return null;
        }

        let modalbackground = "modal-background";

        if(Array.isArray(this.props.modal)){
            return <Videoplayer content={this.props.modal} />
        }else{
            component;
            switch(this.props.modal) {
                case 'login':
                    component = <LoginFormContainer />
                    break
            case 'signup':
                    component = <SignUpFormContainer />
                    break
                default: 
              
                return null;
            }
         }


         let modalchild = "modal-child";
         if(this.state.mounted === true){
             modalchild = "modal-child2";
         }


    
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className={modalchild} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) => {

    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = (dispatch) =>{

    return({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    });

};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);

