import React from 'react';
import "./AppHeader.scss"

export const AppHeader = () => {
    return (
        <div className="app__header">
                <img src={''} alt=""/>
                <div className="app__header-text">
                 KREDOPOL
                </div>
            <a href={'/'} className={"app__header-item"}>Home</a>
            <a href={'/'} className={"app__header-item"}>About us</a>
            <a href={'/'} className={"app__header-item"}>Offers</a>
            <a href={'/'} className={"app__header-item"}>Contact us</a>
            <a href={'/'} className={"app__header-item"}>Call us <b/> </a>
        </div>
    );
};

