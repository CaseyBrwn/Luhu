import {connect} from 'react-redux';
import {logoutUser} from '../../actions/session_actions';
import ShowIndex from './show_index';


const msp = (state) => {

    return({

    });

}

const mdp = (dispatch) => {

    return ({

        logoutUser: () => dispatch(logoutUser())

    });

};

export default connect(msp, mdp)(ShowIndex);

