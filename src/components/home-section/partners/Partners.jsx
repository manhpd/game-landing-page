import './partners.scss'

import HomeSection from '../HomeSection'

import { bg3 } from '../../../assets/images'
const Partners = props => {
    return (
        <HomeSection
            className={`partners ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}>

            <div class="container">
                <div class="row">
                    <div class="col-sm-5 mr-auto">
                        <h2>We Work With the&nbsp;<br />Best Partners</h2>
                        <p class="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                            Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                            <div class="u-container-layout u-valign-middle u-container-layout-2">
                                <img src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/8cf263ed39d95b719e7321a1/6.png?version=" alt="" class="u-image u-image-contain u-image-default u-image-1" data-image-width="130" data-image-height="67" />
                            </div>
                        </div>
                        <div class="u-align-center u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-3">
                            <div class="u-container-layout u-valign-middle u-container-layout-3">
                                <img src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/f152870f5c9d5ab28268fb89/2.png" alt="" class="u-image u-image-contain u-image-default u-image-2" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="u-layout-row">
                            <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-4">
                                <div class="u-container-layout u-valign-middle u-container-layout-4">
                                    <img src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/b26eaa96084b5d63a1b8d98d/5.png" alt="" class="u-image u-image-contain u-image-default u-image-3" />
                                </div>
                            </div>
                            <div class="u-align-center u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-5">
                                <div class="u-container-layout u-valign-middle u-container-layout-5">
                                    <img src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/303f208dbbed58b0ad91b352/3.png" alt="" class="u-image u-image-contain u-image-default u-image-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </HomeSection >
    )
}

export default Partners
