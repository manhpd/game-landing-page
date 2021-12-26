import './roadmap.scss'

import HomeSection from '../HomeSection'

import { bg3, blog1, blog2, blog3 } from '../../../assets/images'
const RoadMap = props => {
    return (
        <HomeSection
            className={`team ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <h2 class="heading-black">Road Map</h2>
                        <p class="text-muted lead">What is our plan.</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top img-raised" src={blog1} alt="Blog 1"/>
                            </a>
                            <div class="card-body">
                                <a href="#" class="card-title mb-2"><h5>We launch new iOS &amp; Android mobile apps</h5></a>
                                <p class="text-muted small-xl mb-2">Sep 27, 2018</p>
                                <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                    consectetur adipiscing elit. <a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top img-raised" src={blog2} alt="Blog 2"/>
                            </a>
                            <div class="card-body">
                                <a href="#" class="card-title mb-2"><h5>New update is available for the editor</h5></a>
                                <p class="text-muted small-xl mb-2">August 16, 2018</p>
                                <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                    consectetur adipiscing elit. <a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <a href="#">
                                <img class="card-img-top img-raised" src={blog3} alt="Blog 3"/>
                            </a>
                            <div class="card-body">
                                <a href="#" class="card-title mb-2"><h5>The story of building #1 page builder</h5></a>
                                <p class="text-muted small-xl mb-2">December 2nd, 2017</p>
                                <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                    consectetur adipiscing elit. <a href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-6">
                    <div class="col-md-6 mx-auto">
                        <a href="#" class="btn btn-primary">View all posts</a>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default RoadMap
