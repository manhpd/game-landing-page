import './roadmap.scss'
import HomeSection from '../HomeSection'

import { bg3, blog1, blog2, blog3 } from '../../../assets/images'
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

                <br></br>
                <br></br>
                <br></br>

                <ul class="timeline">
                    <li >
                        <h2>Kick Start</h2>
                        Advisor Outreach,
                        Whitepaper & pitching deck release,
                        PR Collaborations,
                        Community Growth,
                        Private sale,
                        IDO,
                        Conceptualization Game,
                        Mechanics Characters,
                        Design Play Flow & Battle Mechanism,
                        NFT Smart Contract,
                        Website Launch
                    </li>
                    <li>
                        <h2>Kick Start</h2>
                        Advisor Outreach,
                        Whitepaper & pitching deck release,
                        PR Collaborations,
                        Community Growth,
                        Private sale,
                        IDO,
                        Conceptualization Game,
                        Mechanics Characters,
                        Design Play Flow & Battle Mechanism,
                        NFT Smart Contract,
                        Website Launch
                    </li>
                    <li> <h2>Kick Start</h2>
                        Advisor Outreach,
                        Whitepaper & pitching deck release,
                        PR Collaborations,
                        Community Growth,
                        Private sale,
                        IDO,
                        Conceptualization Game,
                        Mechanics Characters,
                        Design Play Flow & Battle Mechanism,
                        NFT Smart Contract,
                        Website Launch</li>
                </ul>
            </div>

        </HomeSection>
    )
}

export default RoadMap
