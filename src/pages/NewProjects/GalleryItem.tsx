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
    let transformOrigin = null;
    switch (captionSpot) {
        case 'bottomleft':
            transformOrigin = 'bottom left';
            break;
        case 'bottomright':
            transformOrigin = 'bottom right';
            break;
        case 'topleft':
            transformOrigin = 'top left';
            break;
        case 'topright':
            transformOrigin = 'top right';
            break;
    }

    const computedStyle = {
        transform: `translate(${xOffset}%, ${yOffset}%)`,
    }

    return <div className="vertical-item-layout" style={computedStyle}>
        {captionOnTop && <div className={captionClass}>
            {caption}
        </div>}
        <MediaCard id={id} source={source} type={type} scale={scale} />
        {!captionOnTop && <div className={captionClass}>
            {caption}
        </div>}
    </div>
}

export default GalleryItem;