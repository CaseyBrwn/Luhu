import Sessionfrom from "./session_form";
import { connect } from "react-redux";
import { signupUser } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

    let errors = state.errors.session;

    return ({
        errors: errors,
        formType: "signup"
    });

};

const mapDispathToProps = (dispatch) => {

    return ({
        processForm: (user) => dispatch(signupUser(user))
    });

};

export default connect(mapStateToProps, mapDispathToProps)(Sessionfrom);