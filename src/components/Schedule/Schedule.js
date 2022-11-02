import React from 'react';
import autobus from '../../assets/autobus.jpg';
import autobus1 from '../../assets/autobus1.jpg';
import flagUkraine from '../../assets/flagUkraine.png';
import flagPoland from '../../assets/flagPoland.png';
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
                        <li>
                            <img className={'schedule__block-list-item-flag'} src={flagUkraine} alt="flag of Ukraine"/>
                            Ukraina
                        </li>
                        <li>Lwów</li>
                        <li>Iwano-Frankowsk</li>
                        <li>Tarnopol</li>
                        <li>Czerniowce</li>
                        <li>Winnica</li>
                        <li>wyjazd do Polski w każdą niedzielę</li>
                    </ul>
                    <ul className="schedule__block-list-item">
                        <li>
                            <img className={'schedule__block-list-item-flag'} src={flagPoland} alt="flag of Poland"/>
                            Polska
                        </li>
                        <li>Warszawa</li>
                        <li>Łódź</li>
                        <li>Częstochowa</li>
                        <li>Katowice</li>
                        <li>Kraków</li>
                        <li>Rzeszów</li>
                        <li>wyjazd na Ukrainę w piątki</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

