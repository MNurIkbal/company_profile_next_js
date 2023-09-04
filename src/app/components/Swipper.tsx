'use client'
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperComponent = () => {
    return (
        <Swiper
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
>
            <SwiperSlide >
                <div className="bg-red-500 h-64">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-blue-500 h-64">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-blue-500 h-64">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-blue-500 h-64">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-blue-500 h-64">Slide 2</div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;
