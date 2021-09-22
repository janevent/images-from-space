import React, {useState, useEffect} from 'react';
import './LikeButton.css';

export default function LikeButton({ind}){
    const [liked, setLiked] = useState(false);

    const onClickButton = () => {
        let newLiked = !liked;
        setLiked(newLiked)
    }

    //useEffect( () => {
        
    //})
    return(
        <div className="LikeButton">
            <button className="likebutton" id={ind} onClick={onClickButton} value={liked? "unlike" : "like"}>
                {liked? "unlike" : "like"}
            </button>
            {
                liked ?
                <div>
                    <p className="liked">Liked!</p>
                    <img className="star" name="star" src="https://media.giphy.com/media/k9F6ZtOTEr4UGmt3H2/giphy.gif" />
                </div>
                :
                ""
            }
        </div>
    )
}