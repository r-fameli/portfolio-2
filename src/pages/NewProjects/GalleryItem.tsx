import MediaCard from "./VideoCard";

type GalleryItemProps = {
    id: number,
    type: 'img' | 'video',
    source: string,
    caption: string,
    captionSpot: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    xOffset: number,
    yOffset: number,
    scale: number,
}

const GalleryItem = ({ id, source, type, caption, captionSpot = 'topleft', xOffset, yOffset, scale = 1 }: GalleryItemProps) => {
    const captionOnTop = (captionSpot === 'topleft' || captionSpot === 'topright');
    const captionClass = (captionSpot === 'topleft' || captionSpot == 'bottomleft') ? 'left-caption' : 'right-caption';

    const computedStyle = {
        transform: `translate(${xOffset}%, ${yOffset}%) scale(${scale})`
    }

    return <div className="vertical-item-layout">
        {captionOnTop && <div className={captionClass} style={{transform: `translate(${xOffset}%, ${yOffset}%)`}}>
            {caption}
        </div>}
        <MediaCard id={id} source={source} type={type} style={computedStyle}/>
        {!captionOnTop && <div className={captionClass}>
            {caption}
        </div>}
    </div>
}

export default GalleryItem;