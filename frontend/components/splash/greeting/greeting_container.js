import Greeting from './greeting';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/session_actions';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  
    let userId = state.session.id;
    let curentUser = state.entities.users[userId];
    return({
        currentUser: curentUser
    });

};

const mapDispatchToProps = (dispatch) => {

    return({
        logoutUser: () => dispatch(logoutUser()),
        openModal: (model) => dispatch(openModal(model))

    });

};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);