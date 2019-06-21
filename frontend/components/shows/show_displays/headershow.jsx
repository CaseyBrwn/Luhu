import React from 'react';
import DetailsButton from '../buttons/details_button';
import LargePlayButton from '../buttons/large_play_button';
import MyStuffButton from '../buttons/mystuff_button';


class HeaderShow extends React.Component{
    constructor(props){
        super(props);
    }




    render () {


        return(

            <div className="show_image_container">
                <img className="showimage" src="https://c4.wallpaperflare.com/wallpaper/470/455/703/cat-jump-butterfly-grass-wallpaper-b79fc2742f35ffaa4fa28401f16147d5.jpg" />
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
                                <LargePlayButton content={this.props.show} />
                            </li>
                            <li>
                                <div className="startWatch">START WATCHING</div>
                            </li>
                            <li>
                                <DetailsButton color="white" content={this.props.show}/>
                            </li >
                            <li>
                            <MyStuffButton  color="white" content={this.props.show}/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderShow;