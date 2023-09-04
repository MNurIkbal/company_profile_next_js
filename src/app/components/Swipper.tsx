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
        {/* Konten Slide Pertama */}
        <div className="bg-red-500 h-64">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Konten Slide Kedua */}
        <div className="bg-blue-500 h-64">Slide 2</div>
      </SwiperSlide>
      {/* Tambahkan lebih banyak SwiperSlide sesuai kebutuhan */}
    </Swiper>
  );
};

export default SwiperComponent;
