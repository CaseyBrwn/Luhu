import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from "../../actions/content_actions";
import {merge} from 'lodash';

const MoviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies;
        case RECEIVE_MOVIE:
            let newMovie = { [action.movie.id]: action.movie };
            let newState = merge({}, state);
            return merge({}, newState, newMovie);
        default: return state;
    }
};

export default MoviesReducer;