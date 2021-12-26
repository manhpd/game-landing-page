import './pet.scss'

import HomeSection from '../HomeSection'
import PetCard from './PetCard'

import { bg3 } from '../../../assets/images'
import { petsData } from '../../../assets/dummy'

import { Swiper, SwiperSlide } from 'swiper/react'

const Pet = props => {
    return (
        <HomeSection
            className={`pet ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}
        >
            <div className="container relative">
                <div className="pet-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            petsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <PetCard item={item} id={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Pet
