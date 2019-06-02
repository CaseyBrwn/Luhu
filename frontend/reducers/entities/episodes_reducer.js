import { RECEIVE_EPISODE, RECEIVE_ALL_EPISODES } from "../../actions/content_actions";
import {merge} from 'lodash';

const EpisodesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EPISODES:
            return action.episodes;
        case RECEIVE_EPISODE:
            let newEpisode = { [action.episode.id]: action.episode };
            debugger
            let newState = merge({}, state);
            return merge({}, newState, newEpisode);
        default: return state;
    }
};

export default EpisodesReducer;