import React from 'react';

import './Main.scss';
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import Footer from "../Footer/Footer";
import SliderBlock from "../SliderBlock";
import Music from "../Music/Music";

const Main = () => {
    return (<div className={"container"}>
        <Music/>
        <AboutUs/>
        <SliderBlock/>
        <CallUs/>
        <Footer/>
    </div>);
};

export default Main;