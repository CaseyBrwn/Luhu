import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER_SHOW, REMOVE_USER_SHOW} from '../../actions/content_actions'


import { merge } from 'lodash';

export const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge( {}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_USER_SHOW:
        let newnewState = merge({}, state)
            newnewState[Object.keys(action.my_show)].show_ids.push(action.my_show[Object.keys(action.my_show)].show_id)
            return merge( {}, newnewState)
        case REMOVE_USER_SHOW:
            let newState = merge({}, state)

            let array = newState[Object.keys(action.my_show)[0]].show_ids.filter((nums) => nums !== (action.my_show[1].show_id))
            
            newState[Object.keys(action.my_show)[0]].show_ids = array
      
            return merge({}, newState )
         default: return state;
    }
};