import React, { useState, useEffect }  from 'react';

export default function Images({data}){

    const [images, setImages] = useState(data)

    useEffect( () => {
        console.log('images: ' + images.url)
    })
    return(
        
        <div className="Images">
            <h2>Images In Space</h2>
            <img src={images.url}></img>
        </div>
        
    )

} 