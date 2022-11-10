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
                        <div className="finger"><i className="fa-solid fa-arrow-right"></i></div>

                    </div>
                </div>
                <div className="aboutUs__items-list">
                    <ul>
                        <li><i className="fa-solid fa-check"></i>Kreda techniczna
                            Wykorzystywana w wielu Galeziach przemyslu
                        </li>
                        <li><i className="fa-solid fa-check"></i>Wapno ekologiczne</li>
                        <li><i className="fa-solid fa-check"></i>Nawozy mineralne</li>
                        <li><i className="fa-solid fa-check"></i>Dysponujemy wlasnym transportem</li>
                    </ul>
                </div>
            </div>
            <div id={"cardSlider"} className={"aboutUs__slider"}>
                <Slider/>
            </div>
        </div>
    </>);
};

