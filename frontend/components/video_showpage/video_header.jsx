import React from 'react';
import LargePlayButton from '../shows/buttons/large_play_button';


class ShowShow extends React.Component {
    constructor(props) {
        super(props);

    }





    render() {

   
        if(this.props.content){
            switch(this.props.content.id){
                case 1:
                    headerImagecontainer = "aqua";
                    break;
                case 2:
                    headerImagecontainer = "purpleish";
                    break;
                case 3:
                    headerImagecontainer = "blue";
                    break;
                case 4:
                    headerImagecontainer = "yellow";
                    break;
                case 5:
                    headerImagecontainer = "red";
                    break;
            }
        }
        

      
        return (
           
               

                <div className="header_image_container">
                    <div className="midcontainer">
                        <div className="headersubcontainer">
                            <img className="headerimage" src={this.props.content.square_photoUrl} />
                                {/* place holder until add square or side picture */}
                        </div>
                    <div className="headerbackgroundcolor">
                        </div>
                        
                    </div>
                    {/* <div className="showheaderHeader">
                        <div className="showheadertitle">{this.props.content.title}</div>
                        <div className="showheaderclose">X</div>
                    </div>  */}
                    <div className="headerinfoandpic">
                        <div className="tallphotoheaderbox">
                            <img className="tallphotoheader" src={this.props.content.tall_photoUrl} alt=""/>
                        </div>
                        <div className="otherinfobox">
                            <div className="Flexflexflex">
                                <ul className='topheader'>
                                    <li>
                                        <h3>{this.props.content.title}</h3>
                                    </li>
                                    <li>
                                        <h5>2019  ·  Nature</h5>
                                        {/* place holder until add year and genre to data base */}
                                    </li>
                                    <li>
                                        <h4>{this.props.content.description}</h4>
                                    </li>
                                    <li>
                                        <ul className="topheader_nav">
                                            <li className="showshowplay">
                                                <LargePlayButton  content={this.props.content} />
                                            </li>
                                            <li>
                                                <div className="startWatch">START WATCHING</div>
                                            </li>
                                            <li className="material-icons tn-3">add</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    
                </div>
                
          )
    }
}

export default ShowShow;