import React from 'react';
import "./sliderBlock.scss";
import '../../style/button.scss';

import {Slider} from "../slider/Slider";

export const SliderBlock = () => {
    return (<>
            <div className={"aboutUs"} id={'aboutUs'}>
                <div className="aboutUs__items">
                    <div className="aboutUs__items-title">
                        <div className="aboutUs__items-header">
                            Nasze produkty
                            <i className="fa-regular fa-hand-point-right"></i>
                        </div>
                        <div className="aboutUs__items-text">
                            Zobacz co produkujemy i zadzwoń do nas już teraz!
                        </div>
                    </div>
                    <div className={"aboutUs__slider"}>
                        <Slider/>
                    </div>
                </div>
            </div>
        </>);
};

