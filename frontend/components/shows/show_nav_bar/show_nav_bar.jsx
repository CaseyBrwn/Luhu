import React from 'react';


class ShowNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "shownav",
            userletterempty: 'userletterempty',
            navcontainerli: 'navcontainerli'
            
        };
        this.scrollHandler = this.scrollHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);

    }

    componentDidMount() {
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

    onClickHandler(e) {
        this.props.openModal(e.target.value);
    }

    render() {
        let nameletter = this.props.currentUser.username[0].toUpperCase();
        return (

            <div className={this.state.navClass}  >
                <h1 className="luhu">luhu</h1>
                <div className="navclickables">
                    <ul className="navleftcontainer ">
                        <li className={this.state.navcontainerli}>
                            <div className="browseIcon">
                                <i className="material-icons">reorder</i>
                            </div>
                            <div className="navlefttext" >BROWSE</div>
                            
                        </li>
                        <li className={this.state.navcontainerli}>
                            <div className="checkicon">
                                <i className="material-icons md-18" >done</i>
                            </div>
                            <div className="navlefttext">MY STUFF</div> 
                        </li>
                    </ul>
                    <ul className="showclick">
                        <li className="searchNav">
                            <i className="material-icons md-19">search</i>
                            <div>SEARCH</div>
                        </li>
                        <li className='userName'>
                            <div className={this.state.userletterempty}>{nameletter}</div>
                            <div className="userletter">{nameletter}</div>
                            <div>{this.props.currentUser.username.toUpperCase()}</div>
                        </li>
                    </ul>
                </div>
            </div>

        );

    }

};

export default ShowNav;