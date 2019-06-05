import React from 'react';
import FirstRowShow from './show_displays/Firstrow';
import HeaderShow from './show_displays/headershow';
import SecondRow from './show_displays/scondrow_container';


class ShowIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            didmount: false
        
        };

    }

    componentDidMount(){
        this.props.getAllShows().then(
            ()=> {
                this.props.getAllMovies().then(
                    ()=> this.setState({ didmount: true }) 
                );
            }
        );
    }



    render() {
        let shows = this.props.shows;
        let show4 = this.props.shows[3];


        let header = null;
        if(this.state.didmount){
           
            header = <HeaderShow show={show4} />
        }

        let firstRow = shows.map((show) => {
            return(<li className="rowli" key={show.id}><FirstRowShow show={show}/></li>)  
        })
    
        // "https://www.hulu.com/press/wp-content/uploads/2018/04/THT_S2_MQ-1600x520.jpg"
        return(

            <div className='indexbackground'>
                <div className="splash">
                    {header}
                    <ul className="firstrow">
                        {firstRow}
                    </ul>
                    <ul className="showepisodedisplay">
                        <SecondRow />
                     </ul>
                    
                </div>

            </div>
        );
    }


}

export default ShowIndex;


