import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import React, {useEffect, useState} from 'react';
import SignInComponent from './SignInComponent/SignInComponent.js';
import Images from './Images/Images.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData ] = useState({ images: [] });
  const [hasError, setHasError ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.nasa.gov/planetary/apod?count=20&api_key=WSLYI2NcNOkc16wVUAHO5oC6ISjOKsVvJvZSncoW"

  useEffect(()=> {   
    let fetchUrl = () => { 
      fetch(url)
      .then( res => res.json())
      .then(result => {
        let r = JSON.stringify(result)
        console.log('data:' + r)
        setData({images: result} );
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err)
        setHasError(true)
      }) 
    }
    fetchUrl()
  }, [])

  const onSignOut = ()=> {
    setLoggedIn(false)
  }

  const onSignIn = (event) => {
    event.preventDefault();
    setLoggedIn(true)
  }

  const loading = (isLoading) ? "loading" : "hidden"


  return (  
    <div className="App">
      <Header></Header>
      <NavBar loggedIn={loggedIn} onSignOut={onSignOut} ></NavBar>
      <div className="dots-container" className={loading} >
        <div id="dot-1"></div>
        <div id="dot-2"></div>
        <div id="dot-3"></div>
      </div>
      <div className="star" id="star-1">
      </div>
      <div className="star" id="star-2">
      </div>
      <div className="star" id="star-3">
      </div>
      <div className="star" id="star-4">
      </div>
      <div className="star" id="star-5">
      </div>
      <div className="star" id="star-6">
      </div>
      <div className="star" id="star-7">
      </div>
      <div className="star" id="star-8">
      </div>
      <div className="star" id="star-9"></div>
      <svg width="0" height="0">
      <filter id="filter-star-1" >
          <feTurbulence type="fractalNoise" baseFrequency="0.001" numOctaves="0" seed="0" />
          <feDisplacementMap  in="SourceGraphic" scale="120" />
        </filter>
      </svg>
      {loggedIn ?
        !hasError ?
          <Images data={data} hasError={hasError}></Images>
          : <p>Error Loading Images...</p>
        :
        <SignInComponent onSignIn={onSignIn} />
      } 
      
    </div>
  );
}

export default App;
