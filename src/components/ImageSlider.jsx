import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide} from "swiper/react";
import { EffectFade } from "swiper";
import images from "../constants/images";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSlider = (props) => {

    let {slides, pagination} = props;

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={pagination}
            autoplay
        >
            {slides.map((slide, index) => {
                return (
                    <SwiperSlide>
                        <img src={slide.url} alt="" style={{width: "100%"}} className="slider-img"/>
                    </SwiperSlide>
                )
            })}
            
    </Swiper>
    )
    
}

export default ImageSlider;