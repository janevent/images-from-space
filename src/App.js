import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import React, {useEffect, useState} from 'react';
import SignInComponent from './SignInComponent/SignInComponent.js';
import Images from './Images/Images.js';

import { Router, Route, Switch} from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData ] = useState({ images: [] });

  useEffect(()=> {   
      fetch("https://api.nasa.gov/planetary/apod?api_key=WSLYI2NcNOkc16wVUAHO5oC6ISjOKsVvJvZSncoW")
      .then( res => res.json())
      .then(result => {
        console.log('data:' + JSON.stringify(result))
      })
      .catch(err => console.error(err))
    
  })

  const onSignOut = ()=> {
    console.log('firstloggedIn', loggedIn)
    setLoggedIn(false)
    console.log('loggedIn', loggedIn)
  }

  const onSignIn = (event) => {
    event.preventDefault();
    setLoggedIn(true)
  }


  return (
    
    <div className="App">
      <Header></Header>
      <NavBar loggedIn={loggedIn} onSignOut={onSignOut} ></NavBar>
      {loggedIn ?
        <Images></Images>
        :
        <SignInComponent onSignIn={onSignIn} />
      } 
    </div>
  );
}

export default App;
