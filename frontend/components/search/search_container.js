import {connect} from "react-redux";
import Search from "./search";
import { getAllGenres, getAllShows, getAllEpisodes} from "../../actions/content_actions";
 

const msp = (state) => {
    let shows = Object.values(state.entities.shows) || []
    let episodes = Object.values(state.entities.episodes) || []
    let generes = Object.values(state.entities.genres) || []
    return({
        shows: shows,
        episodes: episodes,
        genres: generes,
    })
}

const mdp = (dispatch) => {

    return({
        getAllGenres: () => dispatch(getAllGenres()),
        getAllShows: () => dispatch(getAllShows()),
        getAllEpisodes: () => dispatch(getAllEpisodes()),

    })
}

export default connect(msp, mdp)(Search)