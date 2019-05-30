import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handleChange(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    clickHandler(){
        this.props.loginUser().then(() => dispatch(this.props.closeModal()));
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(()=>dispatch(this.props.closeModal()))
    

    }

    componentDidMount(){
        this.props.clearErrors();
    }


    render(){
    let button = null;

        if (this.props.formType === 'Signup'){
            button = <div className="switchButtonContainer"><div>Already have an account?</div><button className="switchButton" onClick={this.props.otherForm}>Log in</button></div>
        }else{
            button = <div className="switchButtonContainer"><div>Dont have an account?</div><button className="switchButton" onClick={this.props.otherForm}>Start your free trial</button></div> 
        }
    let inputboxclass = "inputBox";
        if(this.state.username.length !== 0){
            inputboxclass= "inputBox2"
        }

        let inputpasswordclass = "inputBox";
        if (this.state.password.length !== 0) {
            inputpasswordclass = "inputBox2"
        }
        let errors = <div className="formErrors"></div>
        if(this.props.errors.length !== 0){
            errors = <div className="formErrors">{this.props.errors[0]}</div>
        }
       


        return(
            <div className="sessionform"> 
            <button className="closeButton" onClick={this.props.closeModal}>X</button>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <h3>{this.props.formType} to LUHU</h3>
                        </li>
                        <li>
                            <button className='demo' onClick={this.clickHandler}>CONTINUE WITH DEMO</button>
                        </li>
                        <li className='emailbox'>
                            <label className='sessionlabel'>USERNAME</label>
                            <input type="text" className={inputboxclass} placeholder="USERNAME" onChange={this.handleChange("username")} value={this.state.username} /> 
                        </li>
                        <li>
                            <label className="sessionlabel">PASSWORD</label>
                            <input type="password" className={inputpasswordclass} placeholder="PASSWORD" onChange={this.handleChange("password")} value={this.state.password} /> 
                        </li>
                        <li>
                            {errors}
                        </li>
                        <li>
                            <input type="submit" className="sessionSubmit" value={this.props.formType} />
                        </li>

                    </ul>
                </form>
                {button}
            </div> 
        );
    }
}

export default SessionForm;