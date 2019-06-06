import React from 'react';


class VideoPlayer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            browse: false
        };
    }

    componentDidMount(){
      
        
        this.props.getEpisode(this.props.videoId);
    }
    componentDidUpdate(prevProps){

        if(prevProps.videoId !== this.props.videoId){
            this.props.getEpisode(this.props.videoId);
        }
  

    }


    render(){

        let video = null;
        if(this.props.video){
            let src = `${this.props.video.videoUrl}`;
            video = <video className="videoplayer2" src={src} controls autoPlay/> ; 
        }

        let videobackground = "videoplayer-background";
        let videoplayercontainer = "videoplayercontainer";
        let browsebutton = <i className="material-icon vid2">call_received</i> 

        if(this.state.browse){
            videobackground = "videoplayer-background2";
            videoplayercontainer = "videoplayercontainer2";
            browsebutton = <i className="material-icon vid2">call_made</i> 
        }
           
         

        return(


            <div className={videobackground} >
                <div className={videoplayercontainer} onClick={e => e.stopPropagation()}>
                    <div className="browsebutton">
                        {browsebutton}
                    </div>
                            {video}
               </div>
        </div>
        )

            
    }


}


export default VideoPlayer;