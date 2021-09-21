import React, { useState, useEffect }  from 'react';
import LikeButton from '../LikeButton/LikeButton';

export default function Images({data}){

    const [images, setImages] = useState(data.images)

    useEffect( () => {
        console.log('images: ' + images)
    })
    return(
        
        <div className="Images">
            <h2>Images In Space</h2>
            {images.forEach( (image, ind) => {
                <div className="image" id={ind}>

                    <img src={image.hdurl}></img>
                    <p>Date: {image.date}</p>
                    <p>Title: {image.title}</p>
                    <LikeButton id={ind} ></LikeButton>
                </div>
            } )}
            
        </div>
        
    )

} 