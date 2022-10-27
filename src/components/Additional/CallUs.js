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

        return (
            <section>
                <section>
                </section>
                <section>
                    <div className="container reveal">
                        <h3 className={"container-subtitle"}></h3>
                        <h2 className={"container-title"}>If you need any gardening service, you can contact with Farmzi.</h2>
                        <div className="text__container">
                            <div className="flex__container">
                                <div className="text__box">
                                    <p className={"text__box-text"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                        eius molestiae perferendis eos provident vitae iste.
                                    </p>
                                </div>
                                <div className="text__box">
                                    <p className={"text__box-text"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                        eius molestiae perferendis eos provident vitae iste.
                                    </p>
                                </div>
                                <div className="text__box">
                                    <p className={"call text__box-text"}>
                                        Our Services <br/>
                                        +00 89 458 648
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
;
