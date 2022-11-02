import React from 'react';
import {Container} from "@mui/material";
import './Main.scss';
import CallUs from "../CallUs";
import AboutUs from "../AboutUs";
import Footer from "../Footer/Footer";
import Schedule from "../Schedule";
import SwiperSlider from "../Swiper/SwiperSlider";
import SliderBlock from "../SliderBlock";

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