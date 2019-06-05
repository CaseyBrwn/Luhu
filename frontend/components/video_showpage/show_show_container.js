import { connect } from "react-redux";
import VideoShowPage from './video_show_page';
import {withRouter} from 'react-router-dom';
import {getShow, getEpisode} from "../../actions/content_actions";




const msp = (state, ownProps) => {

    let showid = ownProps.match.params.showId;
    let show = state.entities.shows[showid];

    return ({
        content: show,
    
    });


};

const mdp = (dispatch) => {

    return ({
        getEpisode: (id) => dispatch(getEpisode(id)),
        getShow: (id) => dispatch(getShow(id))
    });

};



export const ShowShowPageContainer = withRouter(connect(msp, mdp)(VideoShowPage));