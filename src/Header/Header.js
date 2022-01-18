import React from 'react';
import './Header.css';

export default function Header(){
    return(
        <header className="Header">
            <div className="cloud" id="cloud-1"></div>
            <svg width="0" height="0">
                <filter id="filter-1">
                    <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="11" seed="8800" />     
                    <feDisplacementMap  in="SourceGraphic" scale="100" />
                </filter>
            </svg>
            <h1 className="title">From Outer Space</h1>
        </header>
    )
}
