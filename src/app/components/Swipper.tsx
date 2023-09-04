'use client'
import Image from 'next/image';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperComponent = () => {
    const [first, setfirst] = useState(second)

    const items = [
        {
            id: 1,
            nama: 'John Doe',
            tanggalLahir: '15 Januari 1980',
            deskripsi:
                'John Doe adalah seorang penulis dan jurnalis terkenal. Ia lahir pada tanggal 15 Januari 1980, di New York City. Dengan hasratnya terhadap bercerita, John telah menulis banyak novel terlaris dan artikel yang memenangkan berbagai penghargaan yang telah memikat pembaca di seluruh dunia.',
            img: '/assets/img/swipper_1.jpg'
        },
        {
            id: 2,
            nama: 'Jane Smith',
            tanggalLahir: '22 Maret 1975',
            deskripsi:
                'Jane Smith adalah seorang seniman dan pematung berbakat. Lahir pada tanggal 22 Maret 1975, di Paris, Prancis, ia telah mendedikasikan hidupnya untuk menciptakan karya seni yang memukau yang menjelajahi keindahan dan kompleksitas pengalaman manusia.',
            img: '/assets/img/swipper_2.jpg'
        },
        {
            id: 3,
            nama: 'Michael Johnson',
            tanggalLahir: '5 November 1990',
            deskripsi:
                'Michael Johnson adalah seorang musisi dan komposer terkenal. Ia lahir pada tanggal 5 November 1990, di London, Inggris. Musik Michael telah menyentuh hati jutaan orang dan terus menginspirasi pendengar di seluruh dunia.',
            img: '/assets/img/swipper_3.jpg'
        },
        {
            id: 4,
            nama: 'Maria Rodriguez',
            tanggalLahir: '10 Februari 1985',
            deskripsi:
                'Maria Rodriguez adalah seorang ilmuwan dan peneliti terkemuka dalam bidang biologi molekuler. Lahir pada tanggal 10 Februari 1985, di Madrid, Spanyol, ia telah membuat kontribusi signifikan dalam pemahaman kita tentang genetika dan biologi sel.',
            img: '/assets/img/swipper_5.jpg'
        },
        {
            id: 5,
            nama: 'Rizky Pratama',
            tanggalLahir: '25 Mei 1992',
            deskripsi:
                'Rizky Pratama adalah seorang penulis dan pembicara motivasi yang inspiratif. Ia lahir pada tanggal 25 Mei 1992, di Jakarta, Indonesia. Karyanya dalam menulis dan memberikan semangat telah mengubah banyak kehidupan.',
            img: '/assets/img/swipper_6.jpg'
        },
        {
            id: 6,
            nama: 'Siti Nurul Aisyah',
            tanggalLahir: '7 Agustus 1988',
            deskripsi:
                'Siti Nurul Aisyah adalah seorang aktivis hak perempuan dan pendidik terkemuka. Lahir pada tanggal 7 Agustus 1988, di Bandung, Indonesia, ia telah berjuang untuk kesetaraan gender dan pendidikan yang lebih baik bagi semua.',
            img: '/assets/img/swipper_7.jpg'
        },
    ];
 
    
    const slidesPerView = 4;
    

    // Mengatur jumlah spasi antara item
    const spaceBetween = 4;

    const slideItems = items.map((item) => (
        <SwiperSlide key={item.id}>
            {/* Konten Slide */}
            <div className="bg-white border z-10   mt-20 p-4 m-2 cursor-pointer shadow-md">
                <div className='flex justify-center items-center mb-6'>
                    <Image src={item.img} width={250} height={100} alt="hello" />
                </div>
                <h2 className="text-lg font-bold style-color">{item.nama}</h2>
                <p className="text-black text-justify">{item.deskripsi}</p>
            </div>
        </SwiperSlide>
    ));

    return (
        
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            
            autoplay={{ delay: 3000 }}
        >
        
            {slideItems}
            
        </Swiper>
    );
};

export default SwiperComponent;
