import React from 'react';
import autobus from '../../assets/autobus.jpg';
import autobus1 from '../../assets/autobus1.jpg';
import "./Schedule.scss";

export const Schedule = () => {
    return (
        <div>
            <div className="schedule__block">
                <div className={"schedule__block-container"}>
                    <img className={'schedule__block-img'} src={autobus} alt=""/>
                    <img className={'schedule__block-img'} src={autobus1} alt=""/>
                </div>
                <div className="schedule__block-list">
                    <ul className="schedule__block-list-item">
                        <li>Ukraina</li>
                        <li>Lwów</li>
                        <li>Tarnopol</li>
                        <li>Winnica</li>
                        <li>Czerniowce</li>
                        <li>Iwano-Frankowsk</li>
                    </ul>
                    <ul className="schedule__block-list-item">
                        <li>Polska</li>
                        <li>Warszawa</li>
                        <li>Łódź</li>
                        <li>Częstochowa</li>
                        <li>Katowice</li>
                        <li>Kraków</li>
                        <li>Rzeszów</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

