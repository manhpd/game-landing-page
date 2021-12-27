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
               

                <footer class="py-6">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 mr-auto">
                            <h5>About Play Poseidon</h5>
                            <p class="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.</p>
                           
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="btns m-t-4">
                    <Button className="btn-facebook"><a href="#" class="fa fa-facebook"></a></Button>
                    <Button className="btn-discord"><a href="#" class="fab fa-discord"></a></Button>
                    <Button className="btn-twitter"><a href="#" class="fa fa-twitter"></a></Button>
                </div>
            </footer>
            </div>

            
        </HomeSection>
    )
}

export default Community
