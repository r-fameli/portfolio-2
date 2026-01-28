import './ProjectGallery';

type Props = {
    id: number,
    source: string,
    type: 'img' | 'video',
    scale: number,
}

const MediaCard = ({ id, type, source, scale }: Props) => {
    return <div className="media-card" id={`media-${id}`} style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {type == 'video' ? (
            <video
                autoPlay
                muted
                loop
            >
                <source src={source} />
            </video>)
            : (
                <img src={source}>
                </img>
            )
        }
    </div>
}

export default MediaCard;