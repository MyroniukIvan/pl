import React from 'react';
import "./AboutUs.scss";
import '../../style/button.scss';

export const AboutUs = () => {
    return (<>
            <div className={"aboutUs"} id={'aboutUs'}>
                <div className="aboutUs__border"/>
                    <div className="aboutUs__items">
                        <div className="aboutUs__items-title">
                            <div className="aboutUs__items-header">Company intro video</div>
                            <div className="aboutUs__items-text">See our intro video and lets start your dream project.
                            </div>
                        </div>
                        <div className={"aboutUs__video"}>
                            <iframe width="500" height="380"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
                            </iframe>
                        </div>
                </div>
            </div>
        </>
    );
};

