import React from 'react';


class VideoPlayer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){

        let videoId = this.props.match.params.episodeId;
        this.props.getEpisode(videoId);
    }
    componentDidUpdate(prevProps){

        if(prevProps.match.params.episodeId !== this.props.match.params.episodeId){
            let videoId = this.props.match.params.episodeId;
            this.props.getEpisode(videoId);
        }
  

    }


    render(){

        let video = null;
        if(this.props.video){
            let src = `${this.props.video.videoUrl}`;
            video = <video className="videoplayer" src={src} controls autoPlay/> ; 
        }

        return(

            <div className="playermastercontainer">
                <div className='parentvideo'>
                    {video}
                </div>
            </div>
        )

            
    }


}


export default VideoPlayer;