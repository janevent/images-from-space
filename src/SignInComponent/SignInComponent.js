import React, {getState, setState } from 'react';
import 'SignInComponent.css';

export default function SignInComponent({loggedIn, onSignIn}){
    return(
        loggedIn ? 
        <form onSubmit={onSignIn}>
            <label for="name">Name</label>
            <input type="text" id="name" name="email"></input>
            <label for="email">Email</label>
            <input type="text" id="email" name="email"></input>
        </form>
        :
        ""
    
    )
}
