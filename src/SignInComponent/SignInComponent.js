import React, { useState } from 'react';
import './SignInComponent.css';

export default function SignInComponent({loggedIn, onSignIn}){
    const [formData, setFormData] = useState({name: "", email: ""})

    const onChangeForm = (event) => {
        const {name, value} = event.target
        setFormData({...formData, ...{[name]: value}})
    }
    return(
        
        <form className="SignInComponent" onSubmit={onSignIn}>

        <div className="name-container">
            <label htmlFor="name" > Name </label>
            <input type="text" id="name" name="name" onChange={onChangeForm} placeholder="your name" value={formData.name}></input>
        </div>
        <div className="email-container">
            <label htmlFor="email"> Email </label>
            <input type="text" id="email" name="email" onChange={onChangeForm} placeholder="your email" value={formData.email}></input>
        </div>
        <div className="submit-container">
            <button type="submit" className="submit-button"> Log In</button>
        </div>

        </form>
    )
}
