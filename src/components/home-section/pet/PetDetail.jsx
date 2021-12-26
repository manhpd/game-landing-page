import './pet-detail.scss'

import { closeIcon } from '../../../assets/images'
import { useRef, useEffect } from 'react'

const PetDetail = props => {

    const item = props.item
    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const onClose = () => {
        document.querySelector(`#champ-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#champ-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
            id={`pet-detail-${props.id}`}
            className={`pet-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="pet-detail__content">
                <span>{item.nickName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Role: <span className="second-color">{item.role}</span></span>
                <br />
                <span>Difficulty: <span className="second-color">{item.difficulty}</span></span>
                <div className="story">
                    {item.description}
                </div>
                <span>Pet spotlight</span>
                <div className="video">
                    <iframe
                        title="pet spotlight"
                        ref={iframeRef}
                        width="100%"
                    ></iframe>
                </div>
            </div>
            <div className="pet-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="" />
            </div>          
        </div>
    )
}

export default PetDetail
