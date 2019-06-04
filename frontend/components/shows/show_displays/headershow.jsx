import React from 'react';
import DetailsButton from '../buttons/details_button';
import LargePlayButton from '../buttons/large_play_button';


class HeaderShow extends React.Component{
    constructor(props){
        super(props);
    }




    render () {
        return(

            <ul className='topshow'>
                <li>
                    <h2>WATCH THE LUHU ORIGINAL SHOW</h2>
                </li>
                <li>
                    <h3>{this.props.title}</h3>
                </li>
                <li>
                    <h5>2019  ·  Nature</h5> 
                    {/* place holder until add year and genre to data base */}
                </li>
                <li>
                    <h4>{this.props.description}</h4>
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
        )
    }
}

export default HeaderShow;