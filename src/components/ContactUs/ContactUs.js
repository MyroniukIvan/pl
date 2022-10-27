import React from 'react';
import "./ContactUs.scss";

export const ContactUs = () => {
    return (
        <div className={'contactUs'}>
            <ul className="contactUs__list address"> Address
                <a href={'/'} className={"contactUs__list-text text"}>Location</a>
            </ul>
            <ul className="contactUs__list links"> Address
                <a  href={'/'} className={"contactUs__list-link text"}>Location</a>
            </ul>
            <ul className="contactUs__list contacts">Address
                <a  href={'/'} className={"contactUs__list-contact text"}>Location</a>
            </ul>
            <ul className="contactUs__list footer">Address
                <a  href={'/'} className={"contactUs__list-footer text"}>Location</a>
            </ul>
            <ul className={'contactUs__list menu_links'}> MOVE ON THE WEBSITE
                <a href={'/'}>HOME</a>
                <a href={'/'}>HOME</a>
                <a href={'/'}>HOME</a>
                <a href={'/'}>HOME</a>
            </ul>
        </div>
    );
};

