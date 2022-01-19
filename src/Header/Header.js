import React from 'react';
import './Header.css';

export default function Header(){
    return(
        <header className="Header">
            <div className="cloud" id="cloud-1"></div>
            <div className="cloud" id="cloud-2"></div>
            <div id="cloud-3"></div>
            <div className="cloud" id="cloud-4"></div>
            <svg width="0" height="0">
                <filter id="filter-1">
                    <feTurbulence type="fractalNoise" baseFrequency="0.066" numOctaves="19" seed="9900" />     
                    <feDisplacementMap  in="SourceGraphic" scale="1000" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                </filter>
                <filter id="filter-2">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="11" seed="700" />     
                    <feDisplacementMap  in="SourceGraphic" scale="40" />
                </filter> 
                <filter id="filter-3">
                    <feTurbulence type="fractalNoise" baseFrequency="0.020" numOctaves="33" seed="700" />     
                    <feDisplacementMap  in="SourceGraphic" scale="40" />
                </filter> 
            </svg>
            <h1 className="title">From Outer Space</h1>
        </header>
    )
}
