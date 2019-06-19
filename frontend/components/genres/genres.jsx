import React from 'react';


class Genres extends React.Component{
    constructor(){
        super(props)
    }

    componentDidMount(){
        
        this.props.getGenre()
    }




    render(){



        return(
            <div>Welcome to the Genres Page</div>
        )

    }



}

export default Genres;