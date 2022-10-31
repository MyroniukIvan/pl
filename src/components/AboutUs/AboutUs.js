import React from 'react';
import './AboutUs.scss';

export const AboutUs = () => {
    return (
        <div className={"description"}>
            <div className="description__title-about">O firmie</div>
            <div className="description__title">
                Firma „Kredopol”
            </div>
            <img className="description__title-img"
                 src="https://tecnologianocampo.com.br/wp-content/uploads/2020/04/artem-beliaikin-OuRACkI_jYM-unsplash-scaled.jpg"
                 alt="title picture"/>
            <div className="description__subtitle-block">
                <div className="description__subtitle">Kim jesteśmy?</div>
                <div className="description__subtitle-text">zaopatruje producentów rolnych w niektóre rodzaje nawozów
                    mineralnych, w tym również własnej produkcji
                </div>
                <div className="description__subtitle">Misja i wizja</div>
                <div className="description__subtitle-text">Na glebach kwaśnych wskazane jest stosowanie kredy
                    granulowanej jako silnie skoncentrowanego nawozu wapniowego i długo działającego melioranta w celu
                    optymalizacji systemu odżywiania roślin i właściwości gleby.
                </div>
            </div>
        </div>
    );
};

