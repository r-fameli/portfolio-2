import './NewProjects.scss';
import SockyDemo from '../../assets/videos/socky-demo.mp4';
import TronDemo from '../../assets/videos/tron-demo.mp4'

type SpacerProps = {
    children: React.ReactNode;
}

const VerticalSpacer = ({ children }: SpacerProps) => {
    return <div className="vertical-spacer">
        {children}
    </div>
}

type VideoCardProps = {
    video: string,
    id: number,
}

const VideoCard = ({ video, id }: VideoCardProps) => {
    return <div className="video-card" id={`video-${id}`}>
        <video
            autoPlay
            muted
            loop
        >
            <source src={video} />
        </video>
    </div>
}

const NewProjects = () => {
    return <div className="page">
        <div className="video-gallery">
            <VerticalSpacer>
                <div className="vertical-item-layout">
                    <VideoCard video={SockyDemo} id={1} />
                </div>
            </VerticalSpacer>
            <VerticalSpacer>
                <div className="vertical-item-layout">
                    <VideoCard video={TronDemo} id={2} />
                </div>
            </VerticalSpacer>
        </div>
        <div className="project-modal">
        </div>
    </div>
}

export default NewProjects;