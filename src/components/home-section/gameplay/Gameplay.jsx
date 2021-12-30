import './gameplay.scss'
import { useRef, useEffect } from 'react'
import HomeSection from '../HomeSection'
import {
    bg1
} from '../../../assets/images'

const Gameplay = props => {

    const iframeRef = useRef(null)
    const videoUrl = `https://www.youtube.com/embed/G3Udep9HgRE`
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
        iframeRef.current.setAttribute('src', videoUrl)
    }, [])
    return (
        <HomeSection
            className={`gameplay ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div class="container">
                <div class="row">
                    <div className="welcome__info relative col-md-6">
                        <div className="welcome__info__content">
                            <div className="title">
                                <span>Gameplay</span>
                                <h2 className="main-color">PlayPoseidon</h2>
                            </div>
                            <div className="description m-t-4">
                                Claims NFT Heroes and Items. Slay all the beasts of the sea.
                                Claims NFT Heroes and Items. Slay all the beasts of the sea.
                                Claims NFT Heroes and Items. Slay all the beasts of the sea.
                                Claims NFT Heroes and Items. Slay all the beasts of the sea.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <span>Tutorial Video</span>
                        <div className="video">
                            <iframe
                                title="Tutorial Video"
                                ref={iframeRef}
                                width="100%"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Gameplay
