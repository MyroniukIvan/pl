import React from 'react';
import product from '../../assets/product.jpg';
import productSecond from '../../assets/productSecond.jpg';
import productThird from '../../assets/productThird.jpg';
import prfour from '../../assets/pr4.jpg';
import prfive from '../../assets/pr5.jpg';
import prsix from '../../assets/pr6.jpg';
import prseven from '../../assets/pr7.jpg';
import preight from '../../assets/pr8.jpg';
import prnine from '../../assets/pr9.jpg';
import prten from '../../assets/pr10.jpg';



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

        >
            <SwiperSlide><img className='mySlide' src={productSecond} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={product} alt=""/></SwiperSlide>
            <SwiperSlide><img id={"mySlide"} className='mySlide' src={productThird} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={prfour} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={prfive} alt=""/></SwiperSlide>
            <SwiperSlide><img id={"mySlide"} className='mySlide' src={prsix} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={prseven} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={preight} alt=""/></SwiperSlide>
            <SwiperSlide><img id={"mySlide"} className='mySlide' src={prnine} alt=""/></SwiperSlide>
            <SwiperSlide><img className='mySlide' src={prten} alt=""/></SwiperSlide>

        </Swiper>
    );
};
