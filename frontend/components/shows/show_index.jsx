import React from 'react';
import FirstRowShow from './show_displays/Firstrow';
import HeaderShow from './show_displays/headershow';


class ShowIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            didmount: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handledetailsenter = this.handledetailsenter.bind(this);
        this.handledetailsleave = this.handledetailsleave.bind(this);
    }

    componentDidMount(){
        this.props.getAllShows().then(
            ()=>this.setState({ didmount: true }));
        this.props.getAllMovies();
       

    }

    onClickHandler(){
        this.props.logoutUser();
    }
    handledetailsenter(){
        this.setState({detailshover: true});
    }
    handledetailsleave(){
        this.setState({detailshover: false});
    }


    render() {
        let shows = this.props.shows;
        let show4 = this.props.shows[3];

        let header = null;
        if(this.state.didmount){
            header = <HeaderShow props={show4} />
        }

        let firstRow = shows.map((show) => {
            return(<li className="rowli" key={show.id}><FirstRowShow show={show}/></li>)  
        })
     
        

    
        // "https://www.hulu.com/press/wp-content/uploads/2018/04/THT_S2_MQ-1600x520.jpg"
        return(
           

            <div>
                <div className="splash">
                    {header}
                    <ul className="firstrow">
                        {firstRow}
                    </ul>
                </div>

            </div>
        );
    }


}

export default ShowIndex;


