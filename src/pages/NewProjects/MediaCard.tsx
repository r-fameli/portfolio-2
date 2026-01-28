import { useRef } from "react";
import "./ProjectGallery";

type Props = {
    id: number;
    source: string;
    type: "img" | "video";
};

const MediaCard = ({ id, type, source }: Props) => {
    const vidRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        vidRef.current!.play();
    };

    const handleMouseLeave = () => {
        vidRef.current!.pause();
    };
    return (
        <div
            className="media-card"
            id={`media-${id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {type == "video" ? (
                <video ref={vidRef} muted loop>
                    <source src={source} />
                </video>
            ) : (
                <img src={source}></img>
            )}
        </div>
    );
};

export default MediaCard;
