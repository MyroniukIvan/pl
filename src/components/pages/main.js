import React from 'react';
import {Container} from "@mui/material";
import './main.scss'
import Contacts from "../Contacts";
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import {SliderBlock} from "../sliderBlock/sliderBlock";

const Main = () => {
    return (<div className={"container"}>
            <Container maxWidth="sm">
            </Container>
            <AboutUs/>
            <SliderBlock/>
            <CallUs/>
            <Contacts/>
        </div>);
};

export default Main;