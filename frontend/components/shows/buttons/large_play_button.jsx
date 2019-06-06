import React from "react";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {openModal} from '../../../actions/modal_actions';

class LargePlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailhover: false,
        };
        this.handledetailMouseEnter = this.handledetailMouseEnter.bind(this);
        this.handledetailMouseLeave = this.handledetailMouseLeave.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handledetailMouseEnter() {
        this.setState({ detailhover: true });
    }

    handledetailMouseLeave() {
        this.setState({ detailhover: false });
    }
    onClickHandler() {
   
        if (this.props.content.show_id) {
            let info = ["show", this.props.id];
          this.props.openModal(info);
        } else if (this.props.content.episode_ids){
            let info = ["show", this.props.content.episode_ids[0]];
            this.props.openModal(info);
        }else{
            let info = [movie, this.props.content.id];
            this.props.history.push(info);
        }
    }

    render() {

        let materialIcon = "material-icons pl-1";
        if (this.state.detailhover) {
            materialIcon = "material-icons pl-2";
        }
        return (

            <div className="largeplaybuttoncontainer" onClick={this.onClickHandler} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>
                <div className={materialIcon}>play_circle_filled</div>
            </div>
             
        )

    }

}


const mdp = (dispatch) => {

    return({
        openModal: (modal) => dispatch(openModal(modal))

    })


}



export default LargePlayButton = withRouter(connect(null, mdp)(LargePlayButton));