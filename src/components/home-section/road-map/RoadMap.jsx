import './roadmap.scss'
import HomeSection from '../HomeSection'
import { bg3, hero2, hero5, hero1, hero3, hero4, hero6 } from '../../../assets/images'

const RoadMap = props => {

    return (
        <HomeSection
            className={`roadmap ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}>
            <div className="container relative">
                <div className="title">
                    <h2 className="main-color">Road Map</h2>
                </div>
                <section class="ps-timeline-sec">
                    <div class="container">
                        <ol class="ps-timeline">
                            <li>
                                <div class="img-handler-top">
                                    <img src={hero3} alt="" />
                                </div>
                                <div class="ps-bot">
                                    <p>Do you have a recent injury or long term pain?</p>
                                </div>
                                <span class="ps-sp-top">01</span>
                            </li>
                            <li>
                                <div class="img-handler-bot">
                                    <img src={hero5} alt="" />
                                </div>
                                <div class="ps-top">
                                    <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
                                </div>
                                <span class="ps-sp-bot">02</span>
                            </li>
                            <li>
                                <div class="img-handler-top">
                                    <img src={hero4} alt="" />
                                </div>
                                <div class="ps-bot">
                                    <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
                                </div>
                                <span class="ps-sp-top">03</span>
                            </li>
                            <li>
                                <div class="img-handler-bot">
                                    <img src={hero6} alt="" />
                                </div>
                                <div class="ps-top">
                                    <p>Join our happy family of pain free clients.</p>
                                </div>
                                <span class="ps-sp-bot">04</span>
                            </li>
                        </ol>
                    </div>
                </section>
            </div>

        </HomeSection >
    )
}

export default RoadMap
