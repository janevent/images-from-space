import React, {getState, setState} from 'react';

export default function Images({loggedIn}){
    return(
        loggedIn ?
        <div className="Images"></div>
        :
        ""
    )

} 