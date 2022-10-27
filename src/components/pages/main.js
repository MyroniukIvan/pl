import React from 'react';
import {Menu} from "../Menu/Menu";
import AboutUs from "../AboutUs";
import {Container} from "@mui/material";
import './main.scss'
import ContactUs from "../ContactUs";
import Description from "../Description";

const Main = () => {
    return (
        <div className={"container"}>
            <Container maxWidth="sm">
                <Menu/>
            </Container>
            <Description/>
            <AboutUs/>
            <ContactUs/>
        </div>
    );
};

export default Main;