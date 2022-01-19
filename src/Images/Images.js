import React, { useState, useEffect }  from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './Images.css';

export default function Images({data}){

    const [images, setImages] = useState(data.images)
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
       
        //console.log('images: ' + images[0] +images[0].hdurl + (images[0].date).toString() )
    })
    const loading = (isLoading) ? "loading" : "hidden";
    const handleLoadingImage = () => {
        setIsLoading(false)   
    }

    return(
        
        <ul className="Images">
            
            {
            images.map( (image, ind) => {
                return(
                <li className="image" key={ind}>
                    <div className="dot-container-for-image" className={loading}>
                        <div id="dot-4"></div>
                        <div id="dot-5"></div>
                        <div id="dot-6"></div>
                    </div>
                    <img src={image.hdurl} onLoad={handleLoadingImage}></img>
                    <div className="image-details">
                        <LikeButton id={ind} ></LikeButton>
                        <footer>{image.date.toString()} </footer>
                        <p>"  "</p>
                        
                        <footer>   {  JSON.stringify(image.title) }</footer>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    
                </li>
                )
            } )
            
            }
            
        </ul>
        
    )

} 