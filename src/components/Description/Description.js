import React from 'react';
import './Description.scss';

export const Description = () => {
    return (
        <div className={"description"}>

            <div className="description__title-above">About Company</div>
            <div className="description__title">Farmzi have 35 years of experience and know smart way to grow and design
                your beautiful garden.
            </div>
            <img className="description__title-img"
                 src="https://tecnologianocampo.com.br/wp-content/uploads/2020/04/artem-beliaikin-OuRACkI_jYM-unsplash-scaled.jpg"
                 alt="title picture"/>
            <div className="description__subtitle-block">
                <div className="description__subtitle">Who we are?</div>
                <div className="description__subtitle-text">Lorem Ipsum is simply dummy text of the printing and typeset
                    industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown
                    printer took a galley scrambled it make a type specimen book.
                </div>
                <div className="description__subtitle">Mission and vision</div>
                <div className="description__subtitle-text">Lorem Ipsum is simply dummy text of the printing and typeset
                    industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown
                    printer took a galley scrambled it make a type specimen book.
                </div>
            </div>
        </div>
    );
};

