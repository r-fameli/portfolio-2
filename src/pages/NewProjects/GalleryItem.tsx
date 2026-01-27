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
        transform: `translate(${xOffset}%, ${yOffset}%) scale(${scale})`,
        transformOrigin: transformOrigin,
    }

    const captionStyle = { transform: `translate(${xOffset}%, ${yOffset}%)`, transformOrigin: transformOrigin }


    return <div className="vertical-item-layout">
        {captionOnTop && <div className={captionClass} style={captionStyle}>
            {caption}
        </div>}
        <MediaCard id={id} source={source} type={type} style={computedStyle} />
        {!captionOnTop && <div className={captionClass} style={captionStyle}>
            {caption}
        </div>}
    </div>
}

export default GalleryItem;