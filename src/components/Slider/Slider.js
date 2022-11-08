import React from 'react';
import product from '../../assets/product.jpg';
import productSecond from '../../assets/productSecond.jpg';
import productThird from '../../assets/productThird.jpg';


import "./Slider.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';

export const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            navigation={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination,Navigation]}
            className="mySwiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide><img className='mySlide' src={product} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={productSecond} alt=""/></SwiperSlide>
            <SwiperSlide><img id={"mySlide"} className='mySlide' src={productThird} alt=""/></SwiperSlide>
        </Swiper>
    );
};
