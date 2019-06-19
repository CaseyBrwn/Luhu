import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from "../../actions/content_actions";
import { merge } from 'lodash';

const GenresReducer = (state = {}, action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_GENRES:
            return action.genres
        case RECEIVE_GENRE:
            let newState = merge({}, state)
            let newGenre = {[action.genre.id]: action.genre}
            return merge({}, newState, newGenre )
        default: return state;
    }
}
export default GenresReducer;