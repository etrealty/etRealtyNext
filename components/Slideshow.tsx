import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import styles from '../styles/Slideshow.module.css'
import 'swiper/css'

const Slideshow = () => {
    
    const imgArr = [
        "/slideshow/home1.jpg",
        "/slideshow/home2.jpg",
        "/slideshow/home3.jpg",
        "/slideshow/home4.jpg",
        "/slideshow/home5.jpg",
    ]
      //  <div style={{height: '500px', width:'75%', margin:'auto', border: 'solid black 1px'}}>

    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide><img className={styles.slideImg} src={imgArr[0]} /></SwiperSlide>
                <SwiperSlide><img className={styles.slideImg} src={imgArr[1]} /></SwiperSlide>
                <SwiperSlide><img className={styles.slideImg} src={imgArr[2]} /></SwiperSlide>
                <SwiperSlide><img className={styles.slideImg} src={imgArr[3]} /></SwiperSlide>
                <SwiperSlide><img className={styles.slideImg} src={imgArr[4]} /></SwiperSlide>


            </Swiper>
    )

};


export default Slideshow;
