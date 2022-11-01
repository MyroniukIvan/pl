import React from 'react';
import "./AppHeader.scss"

export const AppHeader = () => {
    return (
        <div className="app__header">
            <div className="app__header-text">
                KREDOPOL
            </div>
            <div className="app__header-menu">
                <a href={'#contactUs'} className={"app__header-item"}>Skontaktuj się z nami</a>
                <a href={'#callUs'} className={"app__header-item"}>Zadzwoń do nas</a>
            </div>
        </div>
    );
};

