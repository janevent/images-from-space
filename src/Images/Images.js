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
                    <div className="image-details">
                    <LikeButton id={ind} ></LikeButton>
                    <footer>{image.date.toString()} </footer>
                    <br></br>
                    <footer>   {  JSON.stringify(image.title) }</footer>
                    </div>
                    {/*<hr></hr>*/
                    }
                </li>
                )
            } )
            
            }
            
        </ul>
        
    )

} 