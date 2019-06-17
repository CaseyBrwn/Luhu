import React from "react";
import SmallDisplay from "../shows/show_displays/smalldisplay";

class MyStuff extends React.Component{
    constructor(props){
        super(props)
    
    }


    componentDidMount(){
        this.props.getAllShows()
    }



    render(){


        let favshows = this.props.myShows.map((show) => {
       
            return <li className="Mystuffli" key={show.id}><SmallDisplay content={show} /></li>
        })
        

        return(
            <div className="myStuffcontainer">
                
                <div className="mystuffbanner">
                    <div className="mystuffbannercontent">
                        <div className="Mystufftitle">My Stuff</div>
                        <div className="mystuffsmalltext">
                            <div>Use the</div><div className="material-icons mystuff">add</div><div> button to add content you want to keep track of.</div>
                        </div>
                    </div>
                </div>
                <div className="myshowscontainer">
                    <div className="TVSHOWS">TV SHOWS</div>
                    <div className="ShowsContainer">{favshows}</div>
                </div>
                
            
            </div>
        )
    }
}

export default MyStuff;