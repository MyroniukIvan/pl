import React from 'react';
import {Container} from "@mui/material";
import './main.scss';
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import {SliderBlock} from "../sliderBlock/sliderBlock";
import Footer from "../Footer/Footer";

const Main = () => {
    return (<div className={"container"}>
        <Container maxWidth="sm">
        </Container>
        <AboutUs/>
        <SliderBlock/>
        <CallUs/>
        <Footer/>
    </div>);
};

export default Main;