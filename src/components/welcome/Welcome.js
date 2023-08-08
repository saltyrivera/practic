import React from 'react';
import Header from '../header';
import YellowBlock from '../yellowBlock';
import './welcome.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imgOne from '../img/background-main.jpg';
import imgTwo from '../img/background-two.png';
import imgThree from '../img/background-three.png';



const Welcome = () => {
    return (
        <div className='welcome-block'>
            <Header className='header'/>
            <YellowBlock/>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                className='mySwiper'
            >
                <SwiperSlide><img src={imgOne} alt=''></img></SwiperSlide>
                <SwiperSlide><img src={imgTwo} alt=''></img></SwiperSlide>
                <SwiperSlide><img src={imgThree} alt=''></img></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Welcome;
