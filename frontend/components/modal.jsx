import React from 'react';
import connect from "react-redux";
import loginFormContainer from './splash/Form/login_form_container';
import signUpFormContainer from './splash/Form/signup_form_container';
import {closeModal} from '../actions/modal_actions';




function Modal(props) {


    if(!props.modal){
        return null;
    }

    let component;
    switch(modal) {
        case 'login':
            component = <loginFormContainer />
            break;
    }   case 'signup':
        component = <signUpFormContainer />
        break;
        default: return null;
    }

    return (
        <div className="modal-background" onClicl={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

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


