import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signupUser} from './actions/session_actions';
import {logoutUser} from './actions/session_actions';
import * as Con_Actions from './actions/content_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    //Test Started
    window.getEpisode = Con_Actions.getEpisode;
    window.getAllShows = Con_Actions.getAllShows;
    window.getShow = Con_Actions.getShow;
    window.getAllMovies = Con_Actions.getAllMovies;
    window.getMovie = Con_Actions.getMovie;
    window.logoutUser = logoutUser;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signupUser = signupUser;

    //Test Ended

    ReactDOM.render(<Root store={store}/>, root);
});



