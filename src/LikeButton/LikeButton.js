import React, {useState, useEffect} from 'react';

export default function LikeButton({ind}){
    const [liked, setLiked] = useState(false);

    const onClickButton = () => {
        let newLiked = !liked;
        setLiked(newLiked)
    }

    useEffect( () => {
        
    })
    return(
        <div className="LikeButton">
            <button className="likebutton" id={ind} onClick={onClickButton} value={liked? "unlike" : "like"}></button>
            {
                liked ?
                <p>Liked!</p>
                :
                ""
            }
        </div>
    )
}