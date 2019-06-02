import {RECEIVE_ALL_SHOWS, RECEIVE_SHOW} from "../../actions/content_actions";
import {merge} from 'lodash';


const ShowsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_SHOWS:
            return action.shows;
        case RECEIVE_SHOW:
            let newShow = {[action.show.id]: action.show};
            let newState = merge({} , state);
            return merge({}, newState, newShow);
        default: return state;
    }
};

export default ShowsReducer;