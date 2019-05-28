import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = (props) => {
  
    if(props.currentUser){
        return(
            <>
                <h1>Welcome {props.currentUser.username}</h1>
                <button onClick={props.logoutUser}>Log Out</button>
            </>
        );
    }else{
        return (
            <>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </>
        );
    }
};

export default Greeting;