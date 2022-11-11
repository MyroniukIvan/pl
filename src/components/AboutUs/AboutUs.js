import React from 'react';
import './AboutUs.scss';
import video from "../../assets/KREDOPOL.mp4?autoplay=1";

export const AboutUs = () => {
    return (<div className={"description"}>

            <div className="description__title">
                <video className={'video'} loop={true} playsInline={true} width="400" height="400" autoPlay={true}
                       muted={true}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <img className="description__title-img"
                 src={"https://i.guim.co.uk/img/media/30abf466aeaeaef53f7133dc8f7be22e51b1e328/0_291_5616_3370/master/5616.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=93f21bb679280035bfb674de1d8c7ecc"}
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

