import React from "react";
import Header from './video_header';


class VideoShowPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mounted: false,
        };
    }


    componentDidMount(){

       let id = this.props.match.params.showId;
        this.props.getShow(id).then(() => this.setState({ mounted: true }));
     

    }






    render(){

        let header = null
        if (this.props.content){
            header = <Header content={this.props.content} />
            }

        
        

     
            return(

                <div className="videoshowPagebackground">
                    <div className="showpagecontainer">
                        <div className= "headerdiv">
                            {header}
                        </div>
                    
                    </div>
                </div>
            )
    }






}

export default VideoShowPage;