import React from 'react';
import { connect } from "react-redux";
import LoginFormContainer from './splash/Form/login_form_container';
import SignUpFormContainer from './splash/Form/signup_form_container';
import {closeModal, openModal} from "../actions/modal_actions";



class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalChild: "modal-child"
        };
    }

 


    render() {
        if(!this.props.modal){
            return null;
        }

        let component;
        switch(this.props.modal) {
            case 'login':
                component = <LoginFormContainer />
                break
        case 'signup':
                component = <SignUpFormContainer />
            break
            default: return null;
        }


    
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className={this.state.modalChild} onClick={e => e.stopPropagation()}>
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

