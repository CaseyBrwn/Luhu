import React from 'react';
import SmallDisplay from './smalldisplay';


class SecondRow extends React.Component{
    constructor(props){
        super(props);

        this.state={
            mounted: false
        };
    }


    componentDidMount(){

        this.props.getEpisode(1).then(this.props.getEpisode(10).then(this.props.getEpisode(5).then(this.setState({mounted: true}))));
    }



    render() {
        
        let episodes = this.props.episodes;
        debugger
        let view = null;
        if(this.state.mounted){
            view = episodes.map ((episode) => {
                return (<li key={episode.id}><SmallDisplay content={episode}/></li> )
            })
         }
         debugger

        return(
          
                <>
                {view}
                </>

           
        )


    }

}

export default SecondRow;