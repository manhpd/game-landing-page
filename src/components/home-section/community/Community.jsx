import { useRef, useEffect } from 'react'
import { bg3, trailerImg } from '../../../assets/images'
import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import './community.scss'

const Community = props => {
    return (
        <HomeSection
            className={`trailer ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay trailer__content"
            bgImage={bg3}
        >
            <div className="trailer__content__img">
                <img src={trailerImg} alt="" />
            </div>
            <div className="trailer__content__info">
                <div className="title">
                    <span>Compete With</span>
                    <h2 className="main-color">Friends</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-facebook"><a href="#" class="fa fa-facebook"></a></Button>
                    <Button className="btn-discord"><a href="#" class="fab fa-discord"></a></Button>
                    <Button className="btn-twitter"><a href="#" class="fa fa-twitter"></a></Button>
                </div>

                <footer class="py-6">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 mr-auto">
                            <h5>About Knight</h5>
                            <p class="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.</p>
                            <ul class="list-inline social social-sm">
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-twitter"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Legal</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Refund policy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Partner</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Refer a friend</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Help</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Log in</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 text-muted text-center small-xl">
                            © 2021 Play Poseidon - All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
            </div>

            
        </HomeSection>
    )
}

export default Community
