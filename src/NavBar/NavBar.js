import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar({loggedIn, onSignOut}){
    
    return (
        <nav>
            { 
            loggedIn ?
            <button onClick={onSignOut}>Log Out</button>  
            :
            <p>{loggedIn}</p>
            }
        </nav>
    )
}
