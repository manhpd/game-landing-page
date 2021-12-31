import React, { useState } from "react";
import {
    Swiper,
    SwiperSlide
} from 'swiper/react'
import './home.scss'
import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination,
  
} from 'swiper'

import {
    Welcome,
    Champion,
    ChampionDetail,
    Gameplay,
    Team,
    Community,
    RoadMap,
    Partners,
    Tokenomic
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



const Home = (props) => {

    const channel = new BroadcastChannel('react_connect');
    channel.onmessage = res => {
        if(res.data.to == 'component_2') {
            slideTo(res.data.index);
        }
    }

    const [swiper, setSwiper] = useState(null);

    const slideTo = (index) => {
        if(swiper && (index || index === 0)) {
            swiper.slideTo(index)
        }
    };

    return (
        <>
            <Swiper {...swiperOptions} onSwiper={setSwiper} onSlideChange={(res) => {
                    if(props.selectedTab !== res.activeIndex) {
                        props.selectTab(res.activeIndex)
                    }
                }}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Tokenomic isActive={isActive} />}
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
