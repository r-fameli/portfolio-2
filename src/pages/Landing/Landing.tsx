import CirclingIcons from '../../components/CirclingIcons/CirclingIcons';
import './Landing.scss'

const Landing = () => {
    return <div className="page" id="landing-page">
        <CirclingIcons numCircles={8} />
        <div className="intro">
            <div className="text-center title">Riki Fameli</div>
            <div className="text-center subtitle">full stack software engineer</div>
        </div>
        
        {/* <div id="landing">
        </div> */}
    </div>
}

export default Landing;