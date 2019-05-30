import Sessionfrom from "./session_form";
import { connect } from "react-redux";
import { signupUser, loginUser, clearErrors } from '../../../actions/session_actions';
import { closeModal, openModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {

    let errors = state.errors.session;

    return ({
        errors: errors,
        formType: "Signup"
    });

};

const mapDispathToProps = (dispatch) => {

    return ({
        processForm: (user) => dispatch(signupUser(user)),
        otherForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal()),
        loginUser: () => dispatch(loginUser({ username: 'admin', password: 'password' })),
        clearErrors: () => dispatch(clearErrors())
    });

};

export default connect(mapStateToProps, mapDispathToProps)(Sessionfrom);