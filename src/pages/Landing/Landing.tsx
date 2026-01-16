import CirclingIcons from '../../components/CirclingIcons/CirclingIcons';
import './Landing.scss'

const Landing = () => {
    return <div className="page" id="landing-page">
        <CirclingIcons numCircles={8} />
        <div className="intro">
            <div className="text-center title">Riki Fameli</div>
            <div className="text-center subtitle">full stack software engineer</div>
            <div className="landing-list">
                <div>resume</div>
                <div>mail</div>
                <div>github</div>
                <div>linkedin</div>
            </div>
        </div>
    </div>
}

export default Landing;