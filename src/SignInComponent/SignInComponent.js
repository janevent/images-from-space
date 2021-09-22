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
            <label htmlFor="name" > Name </label>
            <input type="text" id="name" name="name" onChange={onChangeForm} placeholder="your name" value={formData.name}></input>
            <label htmlFor="email"> Email </label>
            <input type="text" id="email" name="email" onChange={onChangeForm} placeholder="your email" value={formData.email}></input>
            <button type="submit"> Submit </button>
        </form>
        
    
    )
}
