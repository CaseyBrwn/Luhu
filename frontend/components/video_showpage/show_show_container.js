import { connect } from "react-redux";
import VideoShowPage from './video_show_page';
import {withRouter} from 'react-router-dom';
import {getShow, getEpisode} from "../../actions/content_actions";
import {closeModal2} from "../../actions/modal_actions";




const msp = (state, ownProps) => {

    let showid = ownProps.info[1]
    let show = state.entities.shows[showid];
    let episodes = null;
    if(show){
        episodes = show.episode_ids.map ((ids) => {
            return (state.entities.episodes[ids]);
        });
    }

    return ({
        content: show,
        episodes: episodes
    });


};

const mdp = (dispatch) => {

    return ({
        getEpisode: (id) => dispatch(getEpisode(id)),
        getShow: (id) => dispatch(getShow(id)),
        closeModal2: () => dispatch(closeModal2())
    });

};



export const ShowShowPageContainer = withRouter(connect(msp, mdp)(VideoShowPage));