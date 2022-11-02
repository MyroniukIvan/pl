import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Autoplay,Navigation } from "swiper";
import 'swiper/css'
import './SwiperSlider.scss'
import product from '../../assets/product.jpg';
import productSecond from '../../assets/productSecond.jpg';
import productThird from '../../assets/productThird.jpg';
function SwiperSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}

                navigation={true}
                className="mySwiper"
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination,Navigation]}

            >
                <SwiperSlide><img src={product} alt=""/></SwiperSlide>
                <SwiperSlide><img src={productSecond} alt=""/></SwiperSlide>
                <SwiperSlide><img src={productThird} alt=""/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperSlider;