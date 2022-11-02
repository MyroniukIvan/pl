import React from 'react';
import "./AppHeader.scss"
import logo from './../../assets/kredopol-logo.png'
export const AppHeader = () => {
    return (
        <div className="app__header">
            <div className="app__header-text">
                <img src={logo} alt=""/>
            </div>
            <div className="app__header-menu">
                <a href={'#footer'} className={"app__header-item"}>Skontaktuj się z nami</a>
            </div>
        </div>
    );
};

