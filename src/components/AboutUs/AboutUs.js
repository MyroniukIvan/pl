import React from 'react';
import './AboutUs.scss';
import video from "../../assets/KREDOPOL.mp4?autoplay=1";
import hands from '../../assets/hands.jpeg';

export const AboutUs = () => {
    return (<div className={"description"}>

            <div className="description__title">
                <video className={'video'} loop={true} playsInline={true} width="400" height="400" autoPlay={true}
                       muted={true}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <img className="description__title-img"
                 src={hands}
                 alt="title picture"/>
            <div className="description__subtitle-block block">
                <div className="description__subtitle">Kim jesteśmy?</div>
                <div className="description__subtitle-text">
                    Zakład powstał w 1974 roku
                    z myślą by wspierać rolnictwo
                </div>
                <div className="description__subtitle">Misja i wizja</div>
                <div className="description__subtitle-text">
                    Firma powstała z misja pomocy rolnikom
                    w uzyskaniu lepszych plonów
                </div>
            </div>
        </div>);
};

