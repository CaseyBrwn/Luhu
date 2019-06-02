import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import episodesReducer from './episodes_reducer';
import showsReducer from './shows_reducer';
import moviesReducer from './movies_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    shows: showsReducer,
    episodes: episodesReducer,
    movies: moviesReducer,
  
});

export default entitiesReducer;
