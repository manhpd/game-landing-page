import './team.scss'

const Team = props => {
    return (
        <div className={`team ${props.isActive ? 'active' : ''}`}>
            <div className="team">
                <div className="title">
                    <h2 className="main-color">TEAM</h2>
                </div>
            </div>
        </div>
    )
}

export default Team
