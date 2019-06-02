import React from 'react';
import ShowNavBar from './show_nav_bar/show_nav_bar_container';


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
            return (<li>{show.title}</li>)
        })
        let allDescriptions = shows.map((show, i) => {
            return (<li>{show.description}</li>)
        })

        let allShows = shows.map((show, i) => {
            return(<li><img src={show.photoUrl} alt=""/></li>)  
        })
        allShows.pop();
        // "https://www.hulu.com/press/wp-content/uploads/2018/04/THT_S2_MQ-1600x520.jpg"
        return(
           

            <div>
                <div className="splash">
                    <div className="show_image_container">
                        <img className="showimage" src="https://www.perfect-fit.co.uk/media/10938/cat_m3_cat_outside_1.jpg?crop=0,0.34355555555555556,0,0&cropmode=percentage&width=1600&height=700&rnd=131527152160000000"/>
                        <ul className='topshow'>
                            <li>
                                Watch the LUHU Series
                            </li>
                            <li>
                                {allTitle.pop()}
                            </li>
                            <li>
                                {allDescriptions.pop()}
                            </li>
                            <li>
                                <div>
                                    <div>Play Button</div>
                                    <div>Start Watching</div>
                                    <i className="material-icons">arrow_forward</i>
                                    <div>Add to Favorites</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                      

                    <ul className="ShowIndex">
                        {allShows}
                    </ul>
                </div>

            </div>
        );
    }


}

export default ShowIndex;


