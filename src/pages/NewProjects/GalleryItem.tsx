import VideoCard from "./VideoCard";

type GalleryItemProps = {
    video: string,
    id: number,
    caption: string,
    captionSpot: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
}

const GalleryItem = ({ video, id, caption, captionSpot = 'topleft' }: GalleryItemProps) => {
    const captionOnTop = (captionSpot === 'topleft' || captionSpot === 'topright');
    const captionClass = (captionSpot === 'topleft' || captionSpot == 'bottomleft') ? 'left-caption' : 'right-caption';

    return <div className="vertical-item-layout">
        {captionOnTop && <div className={captionClass}>
            {caption}
        </div>}
        <VideoCard video={video} id={id} />
        {!captionOnTop && <div className={captionClass}>
            {caption}
        </div>}
    </div>
}

export default GalleryItem;