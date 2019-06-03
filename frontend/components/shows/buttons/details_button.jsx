import React from "react";
import {Link} from 'react-router-dom';

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
m"
    handledetailMouseEnter(){
        this.setState({detailhover: true});
    }

    handledetailMouseLeave(){
        this.setState({detailhover: false});
    }   
    onClickHandler(){

        let route = `/${this.props.type}/${this.props.ID}`
        <Link to={route}/>

    }

    render(){
        
        let detailsbuttoncontainer = `detailsbuttoncontainer`;
        let materialclassName = `material-icons details ${this.props.color}`;
        let gotodetails = 'gotodetails';

        if(this.state.detailhover){
            detailsbuttoncontainer = "detailsbuttoncontainer2";
            materialclassName = `material-icons details2 ${this.props.color}`;
            gotodetails = 'gotodetails2';
        }

        return(
       
            <div className={detailsbuttoncontainer}>
                <div className={materialclassName} onClick={this.onClickHandler} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>arrow_forward</div>
                <div className="triangle">
                    <div className={gotodetails}>GO TO DETAILS PAGE</div>
                </div>
            </div>
             
        )

    }

}



export default DetailsButtons;