import React from 'react';
import ShowNavBar from './show_nav_bar/show_nav_bar_container';
import FirstRowShow from './show_displays/Firstrow';


class ShowIndex extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount(){
        this.props.getAllShows();
        this.props.getAllMovies();
    }

    onClickHandler(){
        this.props.logoutUser();
    }


    render() {
        let shows = this.props.shows;

        let allTitle = shows.map((show, i) => {
            return (<div>{show.title}</div>)
        })
        let allDescriptions = shows.map((show, i) => {
            return (<div>{show.description}</div>)
        })

        let firstRow = shows.map((show, i) => {
            return(<li className="rowli" key={show.id}><FirstRowShow show={show}/></li>)  
        })
    
        // "https://www.hulu.com/press/wp-content/uploads/2018/04/THT_S2_MQ-1600x520.jpg"
        return(
           

            <div>
                <div className="splash">
                    <div className="show_image_container">
                        <img className="showimage" src="https://www.perfect-fit.co.uk/media/10938/cat_m3_cat_outside_1.jpg?crop=0,0.34355555555555556,0,0&cropmode=percentage&width=1600&height=700&rnd=131527152160000000"/>
                        <ul className='topshow'>
                            <li>
                                <h2>WATCH THE LUHU ORIGINAL SHOW</h2>
                            </li>
                            <li>
                                <h3>{allTitle.pop()}</h3>
                            </li>
                            <li>
                                <h5>2019  ·  Nature</h5>
                            </li>
                            <li>
                                <h4>{allDescriptions.pop()}</h4>
                            </li>
                            <li>
                                <ul className="topshow_nav">
                                    <li className="material-icons tn-1">play_circle_filled</li>
                                    
                                        <li className="startWatch">START WATCHING</li>
                                        <li className="material-icons tn-2">arrow_forward</li>
                                        <li className="material-icons tn-3">add</li>
                            
                                </ul>
                            </li>
                          

                            
                        </ul>
                    </div>
                      

                    <ul className="firstrow">
                        {firstRow}
                    </ul>
                </div>

            </div>
        );
    }


}

export default ShowIndex;


