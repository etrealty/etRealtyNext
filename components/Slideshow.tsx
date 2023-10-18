import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import styles from '../styles/Slideshow.module.css'
import 'swiper/css'
import Image from 'next/image';

const Slideshow = () => {
    
    const imgArr = [
        "/slideshow/home1.jpg",
        "/slideshow/home2.jpg",
        "/slideshow/home3.jpg",
        "/slideshow/home4.jpg",
        "/slideshow/home5.jpg",
    ]

    return (
            <Swiper
                style={{ border: 'solid black 2px' ,borderRadius: '8px',boxShadow: 'grey 8px 8px 2px 2px'}}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide><Image className={styles.slideImg} src={imgArr[0]} /></SwiperSlide>
                <SwiperSlide><Image className={styles.slideImg} src={imgArr[1]} /></SwiperSlide>
                <SwiperSlide><Image className={styles.slideImg} src={imgArr[2]} /></SwiperSlide>
                <SwiperSlide><Image className={styles.slideImg} src={imgArr[3]} /></SwiperSlide>
                <SwiperSlide><Image className={styles.slideImg} src={imgArr[4]} /></SwiperSlide>


            </Swiper>
    )

};


export default Slideshow;
