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
        this.setState({mounted: true})
        // this.props.getEpisode(1).then(this.props.getEpisode(10).then(this.props.getEpisode(5).then(this.props.getEpisode(3).then(this.props.getEpisode(11).then(this.props.getEpisode(4).then(this.props.getEpisode(5).then(this.props.getEpisode(2).then(this.setState({mounted: true})))))))));
    }



    render() {
        
        let episodes = this.props.episodes;

        let view = null;
        if(this.state.mounted){
            episodes
            view = episodes.map ((episode) => {
                return (<li key={episode.id}><SmallDisplay content={episode}/></li> )
            })
         }
     

        return(
          
                <>
                {view}
                </>

           
        )


    }

}

export default SecondRow;