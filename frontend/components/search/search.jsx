import React from "react";
import SmallDisplay from "../shows/show_displays/smalldisplay";
import SearchDisplay from "../shows/show_displays/searchdisplay";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
            submit: false
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.onClickClearHandler = this.onClickClearHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(){
        this.setState({submit: true})
    }

    componentDidMount(){
        this.props.getAllGenres();
        this.props.getAllShows();
        this.props.getAllEpisodes();
    }

    handleSearchChange(e){
        this.setState({search: e.target.value, submit: false})
       
    }

    onClickClearHandler(){
        this.setState({search: "", submit: false})
    }


    render(){

        let search = this.state.search;
        let currentShows = this.props.shows;
        let currentEpisodes = this.props.episodes;

        let searchedShows = []
            this.props.shows.forEach(show => {
                let showTitle = show.title.split(' ')
                let searchterm = showTitle.filter(word => { 
                    for (let i = 0; i < search.length && i < word.length; i++) {
                        if (search[i].toLowerCase() !== word[i].toLowerCase()) {
                            return false
                        }
                    }
                    return true
                })
                if (searchterm.length > 0){
                    searchedShows.push(show)
                }
            })

        let searchedEpisodes = []
            this.props.episodes.forEach(episode => {
                
                let episodeTitle = episode.title.split(" ");
                let searchTerm2 = episodeTitle.filter((word) => {
                for (let i = 0; i < search.length && i < word.length; i++) {
                    if (search[i].toLowerCase() !== word[i].toLowerCase()) {
                        return false
                    }
                }
                return true
            })
                if (searchTerm2.length > 0) {
               
                    searchedEpisodes.push(episode)
                }
        })

        if(this.state.submit){
            currentShows = searchedShows
            currentEpisodes = searchedEpisodes
        }

        let shows = currentShows.map((show) => {
            return <div className="Mystuffli" key={show.id}><SmallDisplay content={show} /></div>
        })

        let episodes = currentEpisodes.map((episode) => {
            return <div className="Mystuffli" key={episode.id}><SmallDisplay content={episode} /></div>
        })

        // let genres = this.props.episodes.map((genre) => {
        //     return <div className="Mystuffli" key={genre.id}><SmallDisplay content={episode} /></div>
        // })
        let tvShowsContainer = null;
        let searchEpisodescontainer = "searchEpisodescontainer2"
        if(shows.length>0){
            searchEpisodescontainer = "searchEpisodescontainer"
            tvShowsContainer =
            <div className="searchShowscontainer">
                <div className="TVSHOWS">TV Shows</div>
                <div className="searchShows">{shows}</div>
            </div>
        }
        let episodesContainer
        if (episodes.length > 0){
            episodesContainer =
            <div className={searchEpisodescontainer}>
                <div className="TVSHOWS">Episodes</div>
                <div className="searchShows">{episodes}</div>
            </div>
        }

        if(this.state.search.length > 0 && episodes.length === 0 && shows.length === 0){
        
            tvShowsContainer =
            <div className="failedSearch">
                <div className="failedsearchline1">0 results matching your search were found.</div>
                <div className="failedsearchline2">Check your spelling or try another term.</div>
            </div>
        }

            if(this.state.search.length > 0 && !this.state.submit){
                tvShowsContainer = null
                episodesContainer = null
            }


        let underSearch = null;

       
        let searchedShowsContainer = null;

        let displaySearchedShows = null;
        let displaySearchedEpisodes = null;
        let clear = null;
        if (this.state.search.length > 0 && !this.state.submit) {
            
            clear = <div className="searchClear" onClick={this.onClickClearHandler}>Clear</div>
            underSearch =
                <div className="UnderSearchBox">
                    <div className="material-icons search">search</div>
                    <div>Search for "</div>
                    <div className="searchTerm">{this.state.search}</div>
                    <div>"</div>
                </div>
       

            displaySearchedShows = searchedShows.map((show) => {
                return (
                <div className="searchDiv" key={show.id}><SearchDisplay content={show} search={this.state.search} /></div>)
            })
            displaySearchedEpisodes = searchedEpisodes.map((episode) => {
                return (<div className="searchDiv" key={episode.id}><SearchDisplay content={episode} search={this.state.search} /></div>)
            })

            searchedShowsContainer = 
                <div className="searchedShowsContainer">
                    {displaySearchedShows}
                    {displaySearchedEpisodes}
                </div>
        }

        return(
            <div className="searchContainer" >
                <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input type="text" className="searchBox" onChange={this.handleSearchChange} placeholder="Search" value={this.state.search}/>
                        {clear}
                </form>
                {underSearch}
                {tvShowsContainer}
                {episodesContainer}
                {searchedShowsContainer}
                
               

            
            </div>
        )

    }

}


export default Search;