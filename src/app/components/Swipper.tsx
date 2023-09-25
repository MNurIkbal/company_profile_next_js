'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

const data = [
    {
        img: '/assets/img/1.jpeg',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
    {
        img: '/assets/img/2.jpeg',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
    {
        img: '/assets/img/3.jpeg',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
    {
        img: '/assets/img/4.jpeg',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
    {
        img: '/assets/img/5.png',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
    {
        img: '/assets/img/6.jpeg',
        nama: 'saya',
        jabatan: 'dosen & programmer'
    },
]
export default function Swipper() {
    return (
        <div style={{ cursor: 'pointer', marginTop: 50 }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1410: {
                        slidesPerView: 5,
                    },
                }}
                onSlideChange={() => console.log('swipper berlajan')}
                onSwiper={(swiper) => console.log(swiper)} >
                {data.map((item) => (
                    <SwiperSlide>
                        <div className="content-center">
                            <div className="content_img ">
                                <Image src={item.img} width={400} height={300} alt='gambar' />
                            </div>
                            <div className="text-center  mt-7">
                                <h4 className='font-bold'>{item.nama}</h4>
                                <h6>{item.jabatan}</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
