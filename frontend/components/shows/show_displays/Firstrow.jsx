import React from 'react';


class FirstRowShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
            playhover: "material-icons fr-1",
            play: null,
            rowcontainer: `firstrowcontainer${["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"][Math.floor(Math.random() * 10 )]}`
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMousePictureenter = this.handleMousePictureenter.bind(this);
        this.handleMousePictureleave = this.handleMousePictureleave.bind(this);
        
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
        this.setState({ hover: true});

            
        this.setState({ playhover: "material-icons fr-2" });
    
     
    }

    handleMouseLeave(){
        this.setState({ hover: false, play: null, playhover: "material-icons fr-1"});
    }

    render(){

    
        let firstrowimage = "firstrowimage";
        let firstrowcontainer = "firstrowcontainer";
        let firstUltra = "firstUltra";
        let tallimage = "tall_image";
        let firstrowtitle = "firstrowtitle";
        let description = "firstrowdescription";
        
        if(this.state.hover === true){
            firstrowimage = "firstrowimage2";
            firstrowcontainer = "firstrowcontainer2";
            firstUltra = "firstUltra2";
            tallimage = "tall_image2";
            firstrowtitle = "firstrowtitle2";
            description = "firstrowdescription2";
        }


        return (
            <><div className={firstUltra} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                
                <div className={firstrowcontainer}>
        
                        
                </div>
                <img className={tallimage} src={this.props.show.tall_photoUrl} />
                <div onMouseEnter={this.handleMousePictureenter} onMouseLeave={this.handleMousePictureleave} className="secondrowcontainer">
                    <img className={firstrowimage} onHover={this.handleHover} src={this.props.show.photoUrl}/>
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

                <div className="bottombuttons">
                    <li className="material-icons tn-2">arrow_forward</li>
                    <li className="material-icons tn-3">add</li>
                </div>
            </div>
           </>
        )
    }

}

export default FirstRowShow;