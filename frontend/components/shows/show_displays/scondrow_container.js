import { connect } from "react-redux";
import SecondRow from './secondrow';
import {getEpisode} from "../../../actions/content_actions";



const msp = (state) => {


    let episodes = Object.values(state.entities.episodes);
 
    return {

        episodes: episodes

    };


};

const mdp = (dispatch) => {

    return {
        getEpisode: (id) => dispatch(getEpisode(id))
    };

};

export default connect(msp, mdp)(SecondRow);