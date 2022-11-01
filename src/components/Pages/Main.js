import React from 'react';
import {Container} from "@mui/material";
import './Main.scss';
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import {SliderBlock} from "../SliderBlock/SliderBlock";
import Footer from "../Footer/Footer";
import Schedule from "../Schedule";

const Main = () => {
    return (<div className={"container"}>
        <Container maxWidth="sm">
        </Container>
        <AboutUs/>
        <SliderBlock/>
        <Schedule/>
        <CallUs/>
        <Footer/>
    </div>);
};

export default Main;