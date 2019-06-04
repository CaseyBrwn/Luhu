import React from "react";
import { Redirect } from 'react-router-dom';

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

        let route = `/${this.props.type}/${this.props.ID}/play${episode.id}`;
        < Redirect to={route} />


    }

    render() {

        let materialIcon = "material-icons pl-1";
        if (this.state.detailhover) {
            materialIcon = "material-icons pl-2";
        }
        return (

            <div className="largeplaybuttoncontainer" onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>
                <div className={materialIcon}>play_circle_filled</div>
            </div>
             
        )

    }

}



export default LargePlayButton;