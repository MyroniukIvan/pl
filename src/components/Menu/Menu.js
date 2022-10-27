import React from 'react';
import './Menu.scss';
import '../../style/button.scss';

const buttonStyled = {
    background: "none",
    position: "relative",
}

export const Menu = () => {
    return (
        <div className={"wrapper"}>
            <div className="menu">
                <div className="menu__line"/>
                <div className="menu menu__item">
                </div>
            </div>
        </div>
    );
};

