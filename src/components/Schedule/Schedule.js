import React from 'react';
import map from '../../assets/map.png';
import "./Schedule.scss";

export const Schedule = () => {


    return (
        <div>
            <div className="schedule__block">
                <div className={"schedule__block-container"}>
                    <img id={'map'} className={'map'} src={map} alt=""/>
                </div>
            </div>
        </div>

    );
};

