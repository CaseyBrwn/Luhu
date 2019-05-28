import Sessionfrom from "./session_form";
import {connect} from "react-redux";
import {loginUser} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

    let errors = state.errors.session;

    return({
        errors: errors,
        formType: "login"
    });

};

const mapDispathToProps = (dispatch) => {

    return({
        processForm: (user) => dispatch(loginUser(user))
    });

};

export default connect(mapStateToProps, mapDispathToProps)(Sessionfrom);