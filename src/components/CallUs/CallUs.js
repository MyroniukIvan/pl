import React from 'react';
import "./CallUs.scss";

export const CallUs = () => {
    function reveal() {
        let reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    return (<section>
        <section>
        </section>
        <section>
            <div id={'callUs'} className="container reveal">
                <h3 className={"container-subtitle"}></h3>
                <h2 className={"container-title"}>Potrzebujesz porady?</h2>
                <div className="text__container">
                    <div className="flex__container">
                        <div className="text__box">
                            <ul className={"text__box-text"}>
                                <li>Najlepsze ceny</li>
                                <li>Komfort</li>
                                <li>Internet</li>
                                <li>Gniazda</li>
                                <li>Rezerwacja biletów
                                    <i className="fa-regular fa-hand-point-right"/>
                                </li>
                            </ul>
                        </div>
                        <div className="text__box">

                            <p className={"call text__box-text"}>
                                <i className="fa-solid fa-phone"/>
                                <a className={'call-text'} href="tel:+48 511 846 187 / tel: +380 97 985 7529">Nasze
                                    Usługi <br/> +48 511 846 187 /
                                    +380 97 985 7529</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>);
};
