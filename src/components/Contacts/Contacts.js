import React from 'react';
import "./Contacts.scss";
import license from '../../assets/license.pdf'

export const Contacts = () => {
    return (
        <div id={'contactUs'} className={'contactUs'}>
            <ul className="contactUs__list">Informacja<br/>
                <a href={license} rel="noreferrer" target="_blank" className={"contactUs__list-item text"}>Licencja
                </a>
                <a className={"contactUs__list-item text"} href="mailto: przemek.lyko@interia.pl">e-mail</a>
            </ul>
            <ul className="contactUs__list">Adres zamieszkania<br/>
                <p className={"contactUs__list-item text"}>Kredopol Sp. z o.o <br/>
                    Wasosz Gorny <br/>
                    ul. Witosa 23,
                    42-110 Popow
                </p>
            </ul>
            <ul className="contactUs__list">Przemyslaw Lyko<br/>
                <p className={"contactUs__list-item text"}> Dyrektor Handlowy
                </p>
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

