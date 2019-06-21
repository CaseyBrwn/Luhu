import React from "react";
import SmallDisplay from "../shows/show_displays/smalldisplay";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)

    }

    componentDidMount(){
        this.props.getAllGenres();
        this.props.getAllShows();
        this.props.getAllEpisodes();
    }

    handleSearchChange(e){
        this.setState({search: e.target.value})
    }


    render(){

        let underSearch = null
        if(this.state.search.length> 0){
            underSearch = 
            <div className="UnderSearchBox">
                    <div className="material-icons search">search</div>
                    <div>Search for "</div>
                    <div className="searchTerm">{this.state.search}</div>
                    <div>"</div>
            </div>
        }

        let shows = this.props.shows.map((show) => {
            return <div className="Mystuffli" key={show.id}><SmallDisplay content={show} /></div>
        })

        let episodes = this.props.episodes.map((episode) => {
            return <div className="Mystuffli" key={episode.id}><SmallDisplay content={episode} /></div>
        })

        return(
            <div className="searchContainer" >
                <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input type="text" className="searchBox" onChange={this.handleSearchChange} placeholder="Search" value={this.state.search}/>
                </form>
                {underSearch}
                <div className="searchShowscontainer">
                    <div className="TVSHOWS">TV Shows</div>
                    <div className="searchShows">{shows}</div>
                </div>
                <div className="searchEpisodescontainer">
                    <div className="TVSHOWS">Episodes</div>
                    <div className="searchShows">{episodes}</div>
            </div>
           
            
            
            
            
            
            
            
            
            </div>
        )

    }

}


export default Search;