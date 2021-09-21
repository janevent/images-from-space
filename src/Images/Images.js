import React, { useState, useEffect }  from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './Images.css';

export default function Images({data}){

    const [images, setImages] = useState(data.images)

    useEffect( () => {
        //console.log('images: ' + images[0] +images[0].hdurl + (images[0].date).toString() )
    })
    return(
        
        <ul className="Images">
            
            {
            images.map( (image, ind) => {
                return(
                <li className="image" key={ind}>

                    <img src={image.hdurl}></img>
                    <footer>Date: {image.date.toString()}</footer>
                    <footer>Title: {JSON.stringify(image.title) }</footer>
                    <LikeButton id={ind} ></LikeButton>
                    <hr></hr>
                </li>
                )
            } )
            
            }
            
        </ul>
        
    )

} 