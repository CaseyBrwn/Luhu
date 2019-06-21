import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)

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

        return(
            <div className="searchContainer" >
            <form className="searchForm" onSubmit={this.handleSubmit}>
                    <input type="text" className="searchBox" onChange={this.handleSearchChange} placeholder="Search" value={this.state.search}/>
            </form>
            {underSearch}
            {}
            
            
            
            
            
            
            
            
            </div>
        )

    }

}


export default Search;