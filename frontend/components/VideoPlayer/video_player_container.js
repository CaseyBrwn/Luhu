import { connect } from "react-redux";
import VideoPlayer from './video_player';
import {getEpisode} from '../../actions/content_actions';
import { withRouter } from 'react-router-dom';
import {closeModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {


    let videoId = ownProps.content[1];
  
    let video = state.entities.episodes[ownProps.content[1]] || {};

    return ({
        video: video,
        videoId: videoId
    });


};

const mdp = (dispatch) => {

    return ({
        getEpisode: (id) => dispatch(getEpisode(id)),
        closeModal: () => dispatch(closeModal())
    });

};



export default  withRouter(connect(msp, mdp)(VideoPlayer));