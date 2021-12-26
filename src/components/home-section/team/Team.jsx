import './team.scss'

import HomeSection from '../HomeSection'

import { bg3, team1, team2, team3 } from '../../../assets/images'
const Team = props => {
    return (
        <HomeSection
            className={`team ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}>
            <div id="team" class="team-members-tow section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Team</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-xs-12">

                            <figure>
                                <img src={team1} alt=""/>
                                <div class ="image-overlay">
                                <div class ="overlay-text text-center">
                                <div class ="info-text">
                                <strong>Melody Clark</strong>
                                <span>UX Specialist</span>
                                </div>
                                <hr class ="small-divider"/>
                                <ul class ="social-icons">
                                <li><a href="#"><i class ="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                                </div>
                                </div>
                            </figure>

                        </div>
                        <div class="col-lg-4 col-md-6 col-xs-12">

                            <figure>
                                <img src={team2} alt=""/>
                                <div class ="image-overlay">
                                <div class ="overlay-text text-center">
                                <div class ="info-text">
                                <strong>Danny Burton</strong>
                                <span>Senior Designer</span>
                                </div>
                                <hr class ="small-divider"/>
                                <ul class ="social-icons">
                                <li><a href="#"><i class ="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                                </div>
                                </div>
                            </figure>

                        </div>
                        <div class="col-lg-4 col-md-6 col-xs-12">

                            <figure>
                                <img src={team3} alt=""/>
                                <div class ="image-overlay">
                                <div class ="overlay-text text-center">
                                <div class ="info-text">
                                <strong>Elizabeth Jones</strong>
                                <span>Art Director</span>
                                </div>
                                <hr class ="small-divider"/>
                                <ul class ="social-icons">
                                <li><a href="#"><i class ="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class ="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                                </div>
                                </div>
                            </figure>

                        </div>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Team
