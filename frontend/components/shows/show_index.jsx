import React from 'react';
import FirstRowShow from './show_displays/Firstrow';
import HeaderShow from './show_displays/headershow';
import SecondRow from './show_displays/scondrow_container';
import Footer from '../footer';


class ShowIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            left: true 
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
        // this.props.closeModal()
     
        this.props.getAllEpisodes();
        this.props.getAllShows();
        
    }

    componentDidUpdate(prevProps){
        if (!this.props.currentUser.id) {
            this.props.history.push("/splash");
        }
     

    }

    

    handleClick(){
        if(this.state.left === true){
        this.setState({left: false});
        }else{
            this.setState({left: true});
        }
    }



    render() {

      
        let shows = this.props.shows;
        let show4 = this.props.shows[3];


        let header = null;
        if(shows.length > 0){
           
            header = <HeaderShow show={show4} />
        }

        let firstRow = shows.map((show) => {
            return(<li className="rowli" key={show.id}><FirstRowShow show={show}/></li>)  
        })

        let shiftableshowepisode = "shiftableshowepisode"
        let arrow = <div className="arrowright">
            <i onClick={this.handleClick} className="material-icons">keyboard_arrow_right</i>
        </div>
        if(!this.state.left){
            shiftableshowepisode = "shiftableshowepisode2";
            arrow = <div className="arrowleft">
                <i onClick={this.handleClick} className="material-icons">keyboard_arrow_left</i>
            </div>
        }
    
        
        return(
            <>
            <div className='indexbackground'>
                <div className="splash">
                    {header}
                    <ul className="firstrow">
                        {firstRow}
                    </ul>

                   {arrow}
                    
                    <ul className="showepisodedisplay">
                        <div className="secondrowEpisodes">Episodes</div>
                        <div className={shiftableshowepisode}>
                           
                            <SecondRow />
                        </div>
                     </ul>
                    
                </div>
                    {/* <div className="indexFooter"> */}
                    {/* <Footer /> */}
                    {/* </div> */}
                
            </div>
             
            </>
        );
    }


}

export default ShowIndex;


