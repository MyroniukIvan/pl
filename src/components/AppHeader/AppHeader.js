import React from 'react';
import "./AppHeader.scss"
import logo from  './../../assets/logo-company.svg';
export const AppHeader = () => {
    return (
        <div className="app__header">
            <div className="app__header-text">
                <img className={'app__header-img'} src={logo} alt="logo-company"/>
            </div>
            <div className="app__header-menu">
                <a href={'#footer'} className={"app__header-item"}>Skontaktuj się z nami</a>
            </div>
        </div>
    );
};

