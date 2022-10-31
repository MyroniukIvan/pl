import React from 'react';
import "./Contacts.scss";
import license from '../../assets/license.pdf'

export const Contacts = () => {
    return (
        <div className={'contactUs'}>
            <ul className="contactUs__list">Informacja<br/>
                <a href={license} rel="noreferrer" target="_blank" className={"contactUs__list-item text"}>Licencja</a>
            </ul>
            <ul className="contactUs__list">Adres zamieszkania<br/>
                <a href={'/'} className={"contactUs__list-item text"}>Lokalizacja</a>
            </ul>
            <div className={'contactUs__list menu_links'}>
                <div className="contactUs__list-text">
                    <img className={"contactUs__list-assets"}
                         alt=""/>

                </div>
            </div>
        </div>
    );
};

