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
    }

    handleChange(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
        this.setState({
            username: '',
            password: ''
        });
    }


    render(){
let link = null;
        if (this.props.formType === 'signup'){
             link = <Link to='/login'>Already have an account? Loggin Here</Link>
        }else{
             link = <Link to='/signup'>Dont have an account? Sign Up Here</Link>
        }
    

        return(
            <>
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" onChange={this.handleChange("username")} value={this.state.username} /> 
                <label>Password</label>
                <input type="password" onChange={this.handleChange("password")} value={this.state.password} /> 
                <input type="submit" value={this.props.formType}/>
            </form>
            {link}
            </>
        );
    }
}

export default SessionForm;