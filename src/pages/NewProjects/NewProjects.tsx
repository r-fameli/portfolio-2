import './NewProjects.scss';
import SockyDemo from '../../assets/videos/socky-demo.mp4';
import TronDemo from '../../assets/videos/tron-demo.mp4'
import GalleryItem from './GalleryItem';

type SpacerProps = {
    children: React.ReactNode;
    xOffset?: number;
    yOffset?: number;
}

const GalleryRow = ({ children, xOffset, yOffset }: SpacerProps) => {
    return <div className="vertical-row">
        {children}
    </div>
}

const NewProjects = () => {
    return <div className="page">
        <div className="video-gallery">
            <GalleryRow>
                <GalleryItem video={SockyDemo} id={1} caption={"socky"} captionSpot="topleft"/>
            </GalleryRow>
            <GalleryRow>
                <GalleryItem video={TronDemo} id={2} caption={"tron bot"} captionSpot="bottomright"/>
            </GalleryRow>
            <GalleryRow>
                <GalleryItem video={SockyDemo} id={3} caption={"socky II"} captionSpot="bottomleft"/>
            </GalleryRow>
        </div>
    </div>
}

export default NewProjects;