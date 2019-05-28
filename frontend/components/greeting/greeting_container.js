import Greeting from './greeting';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let userId = state.session.id;
    let curentUser = state.entities.users[userId];
    return({
        currentUser: curentUser
    });

};

const mapDispatchToProps = (dispatch) => {

    return({
        logoutUser: () => dispatch(logoutUser())
    });

};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);