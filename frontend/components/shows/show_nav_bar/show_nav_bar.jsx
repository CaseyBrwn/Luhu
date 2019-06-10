import React from 'react';
import { withRouter } from 'react-router-dom';


class ShowNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "shownav",
            userletterempty: 'userletterempty',
            navcontainerli: 'navcontainerli',
            hoverName: false
        };
        this.scrollHandler = this.scrollHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
        this.mystuffclick = this.mystuffclick.bind(this);
        this.handlehomeclick = this.handlehomeclick.bind(this);
    }



    componentDidMount() {
       if (!this.props.currentUser.id){
            this.props.history.push('/splash');
        } 
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler() {
        let pos = window.pageYOffset;
        if (pos === 0) {
            this.setState({ navClass: "shownav", 
                            userletterempty: 'userletterempty',
                            navcontainerli: 'navcontainerli'
                         });
        } else {
            this.setState({ navClass: "shownavscroll",
                            userletterempty: 'userletterempty2', 
                            navcontainerli: 'navcontainerli2'
                            });
        }
    }

    handlehomeclick(){
        this.props.history.push("/")
    }

    mystuffclick(){
        this.props.history.push("/my-stuff")
    }

    onClickHandler(e) {
        this.props.openModal(e.target.value);
    }

    onMouseEnterHandler(){
        this.setState({ hoverName: true});
    }

    onMouseLeaveHandler(){
        this.setState({ hoverName: false});
    }

    render() {
        if (!this.props.currentUser.id) {
            return null;
        }
        let nameletter = this.props.currentUser.username[0].toUpperCase();
        let nameDropDown = null;
        if(this.state.hoverName){
            nameDropDown = <ul className="dropDown"><li className="showlogout" onClick={this.props.logoutUser} >Log Out</li></ul>
        }

      
        return (

            <div className={this.state.navClass}  >
                <h1 onClick={this.handlehomeclick} className="luhu">luhu</h1>
                <div className="navclickables">
                    <ul className="navleftcontainer ">
                        <li className={this.state.navcontainerli}>
                            <div className="browseIcon">
                                <i className="material-icons">reorder</i>
                            </div>
                            <div className="navlefttext" >BROWSE</div>
                            
                        </li>
                        <li onClick={this.mystuffclick} className={this.state.navcontainerli}>
                            <div className="checkicon">
                                <i className="material-icons md-18" >done</i>
                            </div>
                            <div  className="navlefttext2">MY STUFF</div> 
                        </li>
                    </ul>
                    <ul className="showclick">
                        <li className="searchNav">
                            <i className="material-icons md-19">search</i>
                            <div className="textSearch">SEARCH</div>
                        </li>
                        <li onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} className='userName'>
                            <div className={this.state.userletterempty}>{nameletter}</div>
                            <div className="userletter">{nameletter}</div>
                            <div>{this.props.currentUser.username.toUpperCase()}</div>
                            <ul>{nameDropDown}</ul>
                        </li>
                    </ul>
                </div>
            </div>

        );

    }

};

export default ShowNav;