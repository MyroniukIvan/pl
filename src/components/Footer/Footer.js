import React from 'react';
import logo from './../../assets/kredopol-logo.png';
import facebook from '../../assets/Facebook_footer.svg'
import './Footer.scss';

function Footer() {
    return (

        <div id={'footer'} className="footer">
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
                                    <a className='link' href="tel:+380979857529">+380 97 985 7529 </a>



                                </div>
                                <div className="footer__items_info-social-telephone-telephons">
                                    <a className='link' href="tel:+48511846187">+48 511 846
                                        187 </a>
                                    <div
                                        className="footer__items_info-social-telephone-mail">
                                        <a href="mailto:przemek.lyko@interia.pl">Wyślij
                                            e-mail</a>
                                    </div>
                                </div>

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
                        <div className="footer__items_info-social-title">
                            Jesteśmy na portalach społecznościowych:
                            <a className="footer__items_info-social-title-logo" href="https://www.facebook.com/przemek.lyko.90">
                                <img className='facebook' src={facebook} alt=""/>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <iframe className="footer__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32534.904670074324!2d18.974163264660326!3d51.07033466563356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710a15c6887ddeb%3A0x91224445d51e6cf0!2zV2luY2VudGVnbyBXaXRvc2EgMjMsIDQyLTExMCBXxIVzb3N6IEfDs3JueSwg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sua!4v1667333051612!5m2!1sru!2sua"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
            />
        </div>


    );
}

export default Footer;