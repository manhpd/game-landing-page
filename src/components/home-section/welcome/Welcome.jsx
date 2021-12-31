import { useEffect } from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import {
    Swiper,
    SwiperSlide
} from 'swiper/react'
import SwiperCore, {
    EffectFade,

    Autoplay
} from 'swiper'

import {
    bg1,
    distortion,
    hero2, hero3, hero4, hero5, hero6
} from '../../../assets/images'

SwiperCore.use([Autoplay, EffectFade])

const champImgs = [hero2, hero3, hero4, hero5, hero6]

const Welcome = props => {
    const swiperOptions = {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        speed: 2000
    }
    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div class="row">
                <div class="col-md-6">
                    <div className="welcome__info relative">
                        <div className="welcome__info__content">
                            <div className="title">
                                <span>Welcome To</span>
                                <h2 className="main-color">PlayPoseidon</h2>
                            </div>
                            <div className="description m-t-4">
                                Claims NFT Heroes and Items. Slay all the beasts of the sea.
                            </div>
                            <div className="btns m-t-4">
                                <Button className="btn-main">PLAY NOW</Button>
                                <Button className="btn-second">GET STARTED</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <Swiper loop={true} {...swiperOptions} autoplay={{ delay: 5000 }} >
                        {
                            champImgs.map((item, index) => (
                                <SwiperSlide>
                                    <img src={item} key={index} className="img-welcome" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

          
        </HomeSection>
    )
}

export default Welcome
