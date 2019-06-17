import {connect} from "react-redux"
import {getAllShows} from "../../actions/content_actions"
import myStuff from './my_stuff';


const msp = (state) => {

    let shows = Object.values(state.entities.shows)
    let myShows = shows.filter((show)=> Object.values(state.entities.users)[0].show_ids.includes(show.id)) || []

    return({
        myShows: myShows
    })
}

const mdp = (dispatch) => {

    return({
        getAllShows: () => dispatch(getAllShows())
    })
}

export default connect(msp, mdp)(myStuff)