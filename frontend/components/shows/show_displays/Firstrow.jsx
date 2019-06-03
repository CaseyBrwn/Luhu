import React from 'react';


class FirstRowShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
            play: null,
            rowcontainer: `firstrowcontainer${["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"][Math.floor(Math.random() * 10 )]}`
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        
    }
 
 

   
    handlePlaybutton(){
        this.setState({ play: "material-icons fr-2"});
    }

    handleMouseEnter(){
        this.setState({ hover: true, play: "material-icons fr-1" });
        setTimeout(()=>{
            this.setState({ play: "material-icons fr-2" });
        }, 250);
    }

    handleMouseLeave(){
        this.setState({hover: false, play: null});
    }

    render(){

        let materialiconplay = null;
        let firstrowimage = "firstrowimage";
        let showcon = "firstrowcontainer";
        
        if(this.state.hover === true){
            firstrowimage = "firstrowimage2";
            materialiconplay = <i className={this.state.play}>play_arrow</i>
            showcon = "firstrowcontainer2"
        }

        return (
            <><div className="firstultra" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className={showcon}>
        
                        <img className="tall_image" src={this.props.show.tall_photoUrl}/>
                </div>
                <div className="secondrowcontainer">
                    <img className={firstrowimage} src={this.props.show.photoUrl} />
                    {materialiconplay}
                </div>

                <div className="firstinfocontainer">
                    <ul className="firstinfo">
                        <div>
                            
                        </div>
                        <div className="firstrowtitle">
                            <li>{this.props.show.title}</li>
                            {/* <li className="firstrowdescription">{this.props.show.description}</li> */}
                        </div>
                    </ul>
                </div>
            </div>
           </>
        )
    }

}

export default FirstRowShow;