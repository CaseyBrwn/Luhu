import {connect} from "react-redux"
import Genres from './genres';
import {getGenre} from "../../actions/content_actions";



const msp = (state, ownProps) => {
    let genreId = ownProps.match.params.genreId
    let genre = state.entities.genres[genreId]

    let shows = null;
    if (genre) {
        shows = genre.show_ids.map((ids) => {
            return (state.entities.shows[ids]);
        });
    }
    return({
        genre: genre,
        shows: shows

    })

}

const mdp = (dispatch) => {

    return({
    getGenre: (id) => dispatch(getGenre(id))
    })

}

export default connect(msp, mdp)(Genres)