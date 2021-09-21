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
  const [hasError, setHasError ] = useState(false)
  const url = "https://api.nasa.gov/planetary/apod?count=20&api_key=WSLYI2NcNOkc16wVUAHO5oC6ISjOKsVvJvZSncoW"

  useEffect(()=> {   
    let fetchUrl = () => { 
      fetch(url)
      .then( res => res.json())
      .then(result => {
        let r = JSON.stringify(result)
        console.log('data:' + r)
        setData({images: result} );
      })
      .catch(err => {
        console.error(err)
        setHasError(true)
      }) 
    }
    return fetchUrl

  }, [])

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
        <Images data={data} ></Images>
        :
        <SignInComponent onSignIn={onSignIn} />
      } 
    </div>
  );
}

export default App;
