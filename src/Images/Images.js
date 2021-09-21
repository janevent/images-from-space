import React, { useState, useEffect }  from 'react';
import LikeButton from '../LikeButton/LikeButton';

export default function Images({data}){

    const [images, setImages] = useState(data.images)

    useEffect( () => {
        console.log('images: ' + images[0] +images[0].hdurl + (images[0].date).toString() )
    })
    return(
        
        <div className="Images">
            <h2>Images In Space</h2>
            <p>{images[0].date}</p>
            {
            images.map( (image, ind) => {
                return(
                <div className="image" id={ind}>

                    <img src={image.hdurl}></img>
                    <p>Date: {image.date.toString()}</p>
                    <p>Title: {JSON.stringify(image.title) }</p>
                    <LikeButton id={ind} ></LikeButton>
                </div>
                )
            } )
            
            }
            
        </div>
        
    )

} 