import './ProjectGallery.scss';
import SockyDemo from '../../assets/videos/socky-demo.mp4';
import TronDemo from '../../assets/videos/tron-demo.mp4';
import JournalTexterDemo from '../../assets/videos/journaltexter-demo.mp4';
import GalleryItem from './GalleryItem';


type CaptionSpot = 'topleft' | 'topright' | 'bottomleft' | 'bottomright'

type PlacedGalleryItem = {
    id: number;
    source: string;
    xOffset: number;
    yOffset: number;
    scale: number;
    caption: string;
    captionSpot: CaptionSpot;
}

type RowProps = {
    items: PlacedGalleryItem[]
}

const GalleryRow = ({ items }: RowProps) => {
    return <div className="vertical-row">
        {items.map(({ id, source: video, xOffset, yOffset, scale, caption, captionSpot }) =>
            <GalleryItem video={video} id={id} caption={caption} captionSpot={captionSpot} />
        )
        }
    </div >
}

const ProjectGallery = () => {
    const item1: PlacedGalleryItem = {
        id: 1,
        source: SockyDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 0,
        caption: 'socky',
        captionSpot: 'topleft',
    }

    const item2: PlacedGalleryItem = {
        id: 2,
        source: TronDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 0,
        caption: 'tron bot',
        captionSpot: 'bottomright',
    }

    const item3: PlacedGalleryItem = {
        id: 3,
        source: JournalTexterDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 0,
        caption: 'journaltexter',
        captionSpot: 'bottomright',
    }


    return <div className="page">
        <div className="video-gallery">
            <GalleryRow items={[item1]} />
            <GalleryRow items={[item2]} />
            <GalleryRow items={[item3]} />
        </div>
    </div >
}

export default ProjectGallery;