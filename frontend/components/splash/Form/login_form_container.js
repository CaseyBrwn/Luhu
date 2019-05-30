import Sessionfrom from "./session_form";
import {connect} from "react-redux";
import {loginUser, clearErrors} from '../../../actions/session_actions';
import {closeModal, openModal} from "../../../actions/modal_actions";



const mapStateToProps = (state, ownProps) => {

    let errors = state.errors.session;

    return({
        errors: errors,
        formType: "Log in",
        loggedIn: Boolean(state.session.id)
    });

};

const mapDispathToProps = (dispatch) => {

    return({
        processForm: (user) => dispatch(loginUser(user)),
        otherForm:  () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        loginUser: () => dispatch(loginUser({username: 'admin', password: 'password'})),
        clearErrors: () => dispatch(clearErrors())
    });

};

export default connect(mapStateToProps, mapDispathToProps)(Sessionfrom);