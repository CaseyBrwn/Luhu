import React from "react";
import Header from './video_header';
import SmallDisplay from '../shows/show_displays/smalldisplay';
import { withRouter } from 'react-router-dom';


class VideoShowPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mounted: false,
        };
        this.handleexit = this.handleexit.bind(this);
    }


    componentDidMount(){
        

       let id = this.props.match.params.showId;
        this.props.getShow(id).then(() => this.setState({ mounted: true }));
    }

    componentDidUpdate(prevProps){

        if (prevProps.match.params.showId !== this.props.match.params.showId) {
            let videoId = this.props.match.params.episodeId;
            this.props.getShow(videoId);
        }


    }

    handleexit(){
        this.props.history.push("/shows");
    }






    render(){
       
        let header = null
        let smalldisplay = null
        if (this.props.content){
            header = <Header content={this.props.content} />
            }
         
        if(this.props.episodes && this.props.episodes[0]){
           
            smalldisplay = this.props.episodes.map ((episode) => {
                return (<li key={episode.id}><SmallDisplay content={episode}/></li>)
            })
      
        }


                

     
            return(

                <div  className="videoshowPagebackground">
                    <div className="VideoHeight">

                    </div>
                    <div className="showheaderHeader">
                        <div className="showheadertitle">Luhu Original Show</div>
                        <div onClick={this.handleexit}className="showheaderclose">X</div>
                    </div> 
                    <div className="showpagecontainer">
                        <div className= "headerdiv">
                            {header}
                        </div>
                        <ul className="episodedisplay">
                            {smalldisplay}
                        </ul>
                    
                    </div>
                </div>
            )
    }






}

export default VideoShowPage = withRouter(VideoShowPage);