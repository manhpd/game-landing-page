import React, { useState } from "react";
import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'

import {
    Welcome,
    Champion,
    Pet,
    ChampionDetail,
    Gameplay,
    Team,
    Community,
    RoadMap,
    Partners
} from '../components/home-section'

import { championsData } from '../assets/dummy'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}



const Home = () => {
    const query = new URLSearchParams(window.location.search);

    const slideIndex = query.get('slide');

    console.log(slideIndex);
    const [swiper, setSwiper] = useState(null);

    const slideTo = (index) => {
        if(swiper && index) 
        swiper.slideTo(index)
    };
    slideTo(slideIndex);
    return (
        <>
            <Swiper {...swiperOptions} onSwiper={setSwiper}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Pet isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Gameplay isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Team isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <RoadMap isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Partners isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Community isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
            <div className="scroll">
                <span>Scroll to navigate</span>
            </div>
        </>
    )
}

export default Home
