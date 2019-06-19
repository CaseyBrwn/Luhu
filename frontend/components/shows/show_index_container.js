import {connect} from 'react-redux';
import {logoutUser} from '../../actions/session_actions';
import {getAllShows, getAllMovies} from '../../actions/content_actions';
import ShowIndex from './show_index';


const msp = (state) => {
    let shows = Object.values(state.entities.shows);
    let movies = Object.values(state.entities.movies);
   
    return({
        shows: shows,
        movies: movies,
        currentUser: state.session
    });

}

const mdp = (dispatch) => {

    return ({
        getAllShows: () => dispatch(getAllShows()),
        getAllMovies: () => dispatch(getAllMovies()),
        // getAllGenres: () => dispatch(getAllGenres()),
        logoutUser: () => dispatch(logoutUser())
    });

};

export default connect(msp, mdp)(ShowIndex);

