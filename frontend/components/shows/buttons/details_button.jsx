import React from "react";
import {Redirect} from 'react-router-dom';

class DetailsButtons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detailhover: false,
        };
        this.handledetailMouseEnter = this.handledetailMouseEnter.bind(this);
        this.handledetailMouseLeave = this.handledetailMouseLeave.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handledetailMouseEnter(){
        this.setState({detailhover: true});
    }

    handledetailMouseLeave(){
        this.setState({detailhover: false});
    }   
    onClickHandler(){

        let route = `/${this.props.type}/${this.props.ID}`;
        < Redirect to={route} />
        

    }

    render(){
        
        let detailsbuttoncontainer = `detailsbuttoncontainer`;
        let materialclassName = `material-icons details ${this.props.color}`;
        let gotodetailsContainer = 'gotodetailsContainer';

        if(this.state.detailhover){
            detailsbuttoncontainer = "detailsbuttoncontainer2";
            materialclassName = `material-icons details2 ${this.props.color}`;
            gotodetailsContainer = 'gotodetailsContainer2';
        }

        return(
       
            <div className={detailsbuttoncontainer}>
                <div className={materialclassName} onClick={this.onClickHandler} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>arrow_forward</div>
                <div className={gotodetailsContainer}>
                    <div className="textdetailscontainer">
                        <div className="gotodetails">GO TO DETAILS PAGE</div>
                    </div>
                    <div className="material-icons downarrowcontainer">
                        <div className="material-icons downarrow">arrow_drop_down</div>
                    </div>
                </div>
            </div>
             
        )

    }

}



export default DetailsButtons;