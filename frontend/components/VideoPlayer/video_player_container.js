import { connect } from "react-redux";
import VideoPlayer from './video_player';
import {getEpisode} from '../../actions/content_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {

    debugger
    let videoId = ownProps.content[1];
  
    let video = state.entities.episodes[ownProps.content[1]] || {};

    return ({
        video: video,
        videoId: videoId
    });


};

const mdp = (dispatch) => {

    return ({
        getEpisode: (id) => dispatch(getEpisode(id))
    });

};

export default connect(msp, mdp)(VideoPlayer);


export const VideoPlayerContainer = withRouter(connect(msp, mdp)(VideoPlayer));