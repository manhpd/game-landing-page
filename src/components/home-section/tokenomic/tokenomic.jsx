import './tokenomic.scss'
import HomeSection from '../HomeSection'
import { bg3, hero8 } from '../../../assets/images'

const Tokenomic = props => {
    return (
        <HomeSection
            className={`tokenomic ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg3}
        >
            <div class="container relative">
                <div className="title">
                    <h2 className="main-color">Tokenomic</h2>
                </div>

                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-md-6">
                        <div className="title tokenomic-table">
                            <table class="table">
                                
                                <tbody>
                                    <tr>
                                        <td>Token Symbol</td>
                                        <td>Her</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Total Supply</td>
                                        <td>1,000,000,000</td>
                                        <td>description abcxyz</td>
                                    </tr>

                                    <tr>
                                        <td>Hardcap</td>
                                        <td>$1,695,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Seed Sale</td>
                                        <td>$450,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Private Sale</td>
                                        <td>$1,020,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Public Sale</td>
                                        <td>$225,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Seed Sale</td>
                                        <td>$450,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Private Sale</td>
                                        <td>$1,020,000</td>
                                        <td>description abcxyz</td>
                                    </tr>
                                    <tr>
                                        <td>Public Sale</td>
                                        <td>$225,000</td>
                                        <td>description abcxyz</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <img class="tokenomic-hero" src={hero8} alt="" />
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

export default Tokenomic
