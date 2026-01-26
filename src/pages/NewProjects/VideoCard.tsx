import './ProjectGallery';

type Props = {
    id: number,
    source: string,
    type: 'img' | 'video',
    style: React.CSSProperties,
}

const MediaCard = ({ id, type, source, style }: Props) => {
    return <div className="media-card" id={`media-${id}`} style={style}>
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