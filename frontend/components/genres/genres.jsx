import React from 'react';
import SmallDisplay from '../shows/show_displays/smalldisplay';


class Genres extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let genreId = this.props.match.params.genreId
        this.props.getGenre(genreId)
    }


    


    render(){

       

       
           let foryou = this.props.shows.map((show) => {
                return <div className="Mystuffli" key={show.id}><SmallDisplay content={show}/></div>
            })
      

        let genreType = null;
        if(this.props.genre){
            genreType = this.props.genre.genre_type
    
        }


        return(
            <div className="genresContainer">
            <div className="genreName">
                {genreType}
            </div>
            <div className="ForYouContainer">
                <div className="ForYou">ForYou</div>
                <div className="ShowsContainer">{foryou}</div>
            </div>
            
            
            </div>
        )

    }



}

export default Genres;