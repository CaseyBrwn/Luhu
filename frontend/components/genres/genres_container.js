import {connect} from "react-redux"
import Genres from './genres';
import {getGenre} from "../../actions/content_actions";



const msp = (state, ownProps) => {
    let genreId = ownProps.match.params.genreId
    let genre = state.entities.genres[genreId]
  
    let shows = [];
   
    if (genre && genre.show_ids.length > 0 && Object.keys(state.entities.shows).length>0) {
    
        genre.show_ids.forEach((id) => {
            if (state.entities.shows[id] === undefined){

            }else{
                shows.push(state.entities.shows[id]);
            }
            
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