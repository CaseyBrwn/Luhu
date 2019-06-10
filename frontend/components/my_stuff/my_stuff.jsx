import React from "react";

class MyStuff extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.getAllShows()
    }



    render(){

        

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
                    

                </div>
                
            
            </div>
        )
    }
}

export default MyStuff;