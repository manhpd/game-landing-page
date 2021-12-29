import './team.scss'

import HomeSection from '../HomeSection'

import { bg3, team1, team2, team3 } from '../../../assets/images'
const Team = props => {
    return (
        <HomeSection
            className={`team ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="main-color">Our Team</h2>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="title team-table">
                            <div class="item" >
                                <div class="left_item">
                                    <img src={team1} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Daniel Nguyen</div>
                                    <div class="position">CEO</div>
                                    <div class="exp">Former COO &amp;CTO Onteractive &amp;Minet Asia</div>
                                </div>
                            </div>
                            <div class="item ">
                                <div class="left_item">
                                    <img src={team1} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Trương Đức Phương</div>
                                    <div class="position">Game Director</div>
                                    <div class="exp">
                                        Lead Designer <br></br>Hiker Game
                                    </div>
                                </div>
                            </div>
                            <div class="item" >
                                <div class="left_item">
                                    <img src={team1} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Nguyễn Huy Hoàng</div>
                                    <div class="position">Art Director</div>
                                    <div class="exp">Lead Artist Hiker Game</div>
                                </div>
                            </div>
                            <div class="item " >
                                <div class="left_item">
                                    <img src={team1} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Tạ Sơn Tùng</div>
                                    <div class="position">Business Advisor</div>
                                    <div class="exp">
                                        Cofounder &amp;<br></br>
                                        Chairman Rikkeisoft <br></br>Forbes 30 Under 30
                                    </div>
                                </div>
                            </div>
                            <div class="item aos-init aos-animate" >
                                <div class="left_item">
                                    <img src={team2} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Thi Trương</div>
                                    <div class="position">Executive Advisor</div>
                                    <div class="exp">
                                        Founder &amp;CEO Polka <br></br>
                                        Foundry Red <br></br>Kite Launch
                                    </div>
                                </div>
                            </div>
                            <div class="item " >
                                <div class="left_item">
                                    <img src={team3} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Nguyễn Tuấn Huy</div>
                                    <div class="position">Game Advisor</div>
                                    <div class="exp">Founder &amp;CEO Hiker Game</div>
                                </div>
                            </div>
                            <div class="item " >
                                <div class="left_item">
                                    <img src={team1} />
                                </div>
                                <div class="right_item">
                                    <div class="title">Jolene Nguyen</div>
                                    <div class="position">Marketing Advisor</div>
                                    <div class="exp">CMO of Rikkei Capital</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Team
