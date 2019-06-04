import React from 'react';
import DetailsButton from '../buttons/details_button';
import LargePlayButton from '../buttons/large_play_button';


class HeaderShow extends React.Component{
    constructor(props){
        super(props);
        debugger
    }




    render () {
        return(

            <div className="show_image_container">
                <img className="showimage" src="https://www.perfect-fit.co.uk/media/10938/cat_m3_cat_outside_1.jpg?crop=0,0.34355555555555556,0,0&cropmode=percentage&width=1600&height=700&rnd=131527152160000000" />
                <ul className='topshow'>
                    <li>
                        <h2>WATCH THE LUHU ORIGINAL SHOW</h2>
                    </li>
                    <li>
                        <h3>{this.props.show.title}</h3>
                    </li>
                    <li>
                        <h5>2019  ·  Nature</h5> 
                        {/* place holder until add year and genre to data base */}
                    </li>
                    <li>
                        <h4>{this.props.show.description}</h4>
                    </li>
                    <li>
                        <ul className="topshow_nav">
                            <li>
                                <LargePlayButton videoId={null} type={null} />
                            </li>
                            <li>
                                <div className="startWatch">START WATCHING</div>
                            </li>
                            <li>
                                <DetailsButton color="white" showId={null} />
                            </li>
                            <li className="material-icons tn-3">add</li>

                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderShow;