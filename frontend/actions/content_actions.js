export const RECEIVE_ALL_SHOWS = "RECEIVE_ALL_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";
export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const RECEIVE_ALL_EPISODES = "RECEIVE_EPISODES";
import * as ContentUtil from '../util/content_api_util';


const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows: shows
});

const receiveAllMovies = (movies) => ({
    type: RECEIVE_ALL_MOVIES,
    movies: movies
});

const receiveAllEpisodes = (episodes) => ({
    type: RECEIVE_ALL_EPISODES,
    episodes: episodes
});

const receiveEpisode = (episode) => ({
    type: RECEIVE_EPISODE,
    episode: episode
});

const receiveShow = (show) => ({
    type: RECEIVE_SHOW,
    show: show
});

const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie: movie
});

export const getEpisode = (id) => (dispatch) => (
    ContentUtil.fetchEpisode(id).then((episode)=>dispatch(receiveEpisode(episode)))
);

export const getAllShows = () => (dispatch) => (
    ContentUtil.fetchAllShows().then((shows)=>dispatch(receiveAllShows(shows)))
);

export const getShow = (id) => (dispatch) => (
    ContentUtil.fetchShow(id).then((res) => {
        dispatch(receiveShow(res.show));
        dispatch(receiveAllEpisodes(res.episodes));
    }));

export const getAllMovies = () => (dispatch) => (
    ContentUtil.fetchAllMovies().then((movies) => dispatch(receiveAllMovies(movies)))
);

export const getMovie = (id) => (dispatch) => (
    ContentUtil.fetchMovie(id).then((movie) => dispatch(receiveMovie(movie)))
);