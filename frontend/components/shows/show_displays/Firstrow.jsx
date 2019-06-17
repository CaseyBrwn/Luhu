import React from 'react';
import DetailsButton from '../buttons/details_button';
import {withRouter} from "react-router-dom";
import {openModal} from '../../../actions/modal_actions';
import {connect} from "react-redux";
import MyStuffButton from "../buttons/mystuff_button";


class FirstRowShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
            firsthover: false,
            playhover: "material-icons fr-1",
            play: null,
            rowcontainer: `firstrowcontainer${["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"][Math.floor(Math.random() * 10 )]}`
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMousePictureenter = this.handleMousePictureenter.bind(this);
        this.handleMousePictureleave = this.handleMousePictureleave.bind(this);
        this.playvideo = this.playvideo.bind(this);
        
    }
 
 

    playvideo(){
        if (this.props.show.show_id) {
            let info = ["show", this.props.show.id];
            this.props.openModal(info);
        } else if (this.props.show.episode_ids) {
            let info = ["show", this.props.show.episode_ids[0]];
            this.props.openModal(info);
        } else {
            let info = [movie, this.props.content.id];
            this.props.history.push(info);
        }
    }

    handleMousePictureenter(){
        setTimeout(() => {
            if (this.state.playhover === "material-icons fr-2"){
                this.setState({ playhover: "material-icons fr-3" });
            }
        }, 100);

    }

    handleHover(){
        this.setState({ playhover: "material-icons fr-3"});
    }

    handleMousePictureleave(){
        this.setState({ playhover: "material-icons fr-2" });

    }

    handleMouseEnter(){
        this.setState({firsthover: true})
        setTimeout(() => {
            if (this.state.firsthover) {
                this.setState({ hover: true, playhover: "material-icons fr-2" });
            }
        }, 200);
        


    
     
    }

    handleMouseLeave(){
        this.setState({ firsthover: false, hover: false, play: null, playhover: "material-icons fr-1"});
    }

    render(){
        let rowcontainer= "firstrowcontainer";
        switch(this.props.show.title){
     
            case "Nature":
                rowcontainer = "firstrowcontainernature";
                break;
               
            case "Humans":
                rowcontainer = "firstrowcontainerhumans";
                break;
            case "Cities":
                rowcontainer = "firstrowcontainercities";
                break;
            case "Cats":
                rowcontainer = "firstrowcontainercats";
                break;
            case "Top Cars":  
                rowcontainer = "firstrowcontainertopcars";
                break;
        }
    

    
        let firstrowimage = "firstrowimage";
        let firstrowcontainer = "firstrowcontainer";
        let firstUltra = "firstUltra";
        let tallimage = "tall_image";
        let firstrowtitle = "firstrowtitle";
        let description = "firstrowdescription";
        let footer = null;
        
        if(this.state.hover === true){
            firstrowimage = "firstrowimage2";
            rowcontainer = `${rowcontainer}${2}`;
            firstrowcontainer = "firstrowcontainer2";
            firstUltra = "firstUltra2";
            tallimage = "tall_image2";
            firstrowtitle = "firstrowtitle2";
            description = "firstrowdescription2";
            footer = <div className="bottombuttons">
                <li><DetailsButton color="white" content={this.props.show}/></li>
                <li><MyStuffButton color="white" content={this.props.show} /></li>
            </div>
        }
   
        return (
            <><div className={firstUltra} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className={rowcontainer}>
          
                </div>
                <img className={tallimage} src={this.props.show.tall_photoUrl} />
                <div onClick={this.playvideo} onMouseEnter={this.handleMousePictureenter} onMouseLeave={this.handleMousePictureleave} className="secondrowcontainer">
                    <img  className={firstrowimage}  src={this.props.show.photoUrl}/>
                    <i className={this.state.playhover}>play_arrow</i>
                </div>

                <div className="firstinfocontainer">
                    <ul className="firstinfo">
                        <div className={firstrowtitle}>
                            <li>{this.props.show.title}</li>
                            <li className={description}>{this.props.show.description}</li>
                        </div>
                    </ul>
                </div>
                {footer}
               
            </div>
           </>
        )
    }

}




const mdp = (dispatch) => {

    return ({
        openModal: (modal) => dispatch(openModal(modal))

    })


}

export default connect(null, mdp)(FirstRowShow);