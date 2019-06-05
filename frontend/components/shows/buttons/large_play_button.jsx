import React from "react";
import { withRouter } from 'react-router-dom';

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
            let route = `/shows/${this.props.content.show_id}/${this.props.content.id}`;
            this.props.history.push(route);
        } else if (this.props.content.episode_ids){
        
            let route = `/shows/${this.props.content.id}/${this.props.content.episode_ids[0]}`;
       
            this.props.history.push(route);
        }else{
            let route = `/movies/${content.id}`;
            this.props.history.push(route);
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



export default LargePlayButton = withRouter(LargePlayButton);