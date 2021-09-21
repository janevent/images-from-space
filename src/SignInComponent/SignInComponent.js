import React from 'react';
import './SignInComponent.css';

export default function SignInComponent({loggedIn, onSignIn}){
    return(
        
        <form onSubmit={onSignIn}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="email"></input>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"></input>
            <button type="submit">Submit</button>
        </form>
        
    
    )
}
