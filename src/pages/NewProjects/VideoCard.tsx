import './NewProjects.scss';

type Props = {
    video: string,
    id: number,
}

const VideoCard = ({ video, id }: Props) => {
    return <div className="video-card" id={`video-${id}`}>
        <video
            // autoPlay
            muted
            loop
        >
            <source src={video} />
        </video>
    </div>
}

export default VideoCard;