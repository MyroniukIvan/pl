import React from 'react';

import './Main.scss';
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import Footer from "../Footer/Footer";
import SliderBlock from "../SliderBlock";

const Main = () => {
    return (<div className={"container"}>
        <AboutUs/>
        <SliderBlock/>
        <CallUs/>
        <Footer/>
    </div>);
};

export default Main;