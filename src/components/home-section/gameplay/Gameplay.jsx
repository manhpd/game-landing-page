import './gameplay.scss'
import { useRef } from 'react'
import Button from '../../button/Button'
import HomeSection from '../HomeSection'
import {
    bg1
} from '../../../assets/images'

const Gameplay = props => {

    const videoRef = useRef(null)

    return (
        <HomeSection
        className={`gameplay ${props.isActive ? 'active' : ''}`}
        contentClassName="overlay welcome__content"
        bgImage={bg1}
    >
                <div className="title">
                    <h2 className="main-color">Gameplay</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">PLAY NOW</Button>
                    <Button className="btn-second">GET STARTED</Button>
                </div>
        </HomeSection>
    )
}

export default Gameplay
