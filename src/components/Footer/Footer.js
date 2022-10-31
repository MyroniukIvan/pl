import React from 'react';
import logo from './../../assets/kredopol-logo.png';
import './Footer.scss';

function Footer() {
    return (

        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="footer__items">
                    <div className="footer__items_menu">
                        <ul className="footer__items_menu-list">
                            <li>
                                <a href="#">Dom</a>
                            </li>
                            <li>
                                <a href="#">Skontaktuj się z nami</a>
                            </li>
                            <li>
                                <a href="#">Zadzwoń do nas</a>
                            </li>

                        </ul>
                    </div>

                    <div className="footer__items_info">

                        <div className="footer__items_info-social">
                            <div

                                className="footer__items_info-social-telephone">
                                <p className="name_director">Przemyslaw Lyko</p>
                                <p className="
                                    position">Dyrektor Handlowy</p>
                                <div
                                    className="footer__items_info-social-telephone-telephons">
                                    <a href="tel:+48 511 846 187">+48 511 846
                                        187 </a>
                                </div>
                            </div>
                            <div className="footer__items_info-social-title">
                                Jesteśmy na portalach społecznościowych:
                            </div>

                        </div>
                    </div>
                    <div className="footer__items_menu">
                        <ul className="footer__items_menu-address">
                            <li>
                                Kredopol Sp. z o.o
                            </li>
                            <li>
                                Wasosz Gorny
                            </li>
                            <li>
                                ul. Witosa 23, 42-110 Popow
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Footer;