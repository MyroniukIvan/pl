import React from 'react';
import "./SliderBlock.scss";

import {Slider} from "../Slider/Slider";

export const SliderBlock = () => {
    return (<>
        <div className={"aboutUs"} id={"aboutUs"}>
            <div className="aboutUs__items">
                <div className="aboutUs__items-title">
                    <div className="aboutUs__items-header">
                        Nasze produkty
                        <div className="finger"><i className="fa-regular fa-hand-point-right"></i></div>

                    </div>
                </div>
                <div className="aboutUs__items-list">
                    <ul>
                        <li>Kreda techniczna
                            Wykorzystywana w wielu Galeziach przemyslu
                        </li>
                        <li>Wapno ekologiczne</li>
                        <li>Nawozy mineralne</li>
                    </ul>
                </div>
            </div>
            <div id={"cardSlider"} className={"aboutUs__slider"}>
                <Slider/>
            </div>
        </div>
    </>);
};

