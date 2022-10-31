import React from 'react';
import "./AppHeader.scss"

export const AppHeader = () => {
    return (
        <div className="app__header">
                <img src={''} alt=""/>
                <div className="app__header-text">
                 KREDOPOL
                </div>
            <a href={'/'} className={"app__header-item"}>Dom</a>
            <a href={'#aboutUs'} className={"app__header-item"}>O nas</a>
            <a href={'/'} className={"app__header-item"}>Contact us</a>
            <a href={'#callUs'} className={"app__header-item"}>Call us <b/> </a>
        </div>
    );
};

