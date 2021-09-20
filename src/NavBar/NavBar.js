import React, { getState } from 'react';
import './NavBar.css';

export default function NavBar({loggedIn, onSignOut}){
    let {loggedIn, setLoggedIn} = getState(loggedIn)
    return (
        <nav>
            !loggedIn ? <button onClick={onSignOut()}>Log Out</button> : ""
        </nav>
    )
}
