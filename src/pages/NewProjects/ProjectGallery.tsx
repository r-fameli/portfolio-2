import './ProjectGallery.scss';
import SockyDemo from '../../assets/videos/socky-demo.mp4';
import TronDemo from '../../assets/videos/tron-demo.mp4';
import JournalTexterDemo from '../../assets/videos/journaltexter-demo.mp4';
import VisualTransformersDemo from '../../assets/images/visual-transformers-poster.jpg';
import GalleryItem from './GalleryItem';

// Projects:
// Big/medium: Deep learning, Journaltexter, Socky, portfolios
// Small: Tron bot, UI/UX portfolio

type CaptionSpot = 'topleft' | 'topright' | 'bottomleft' | 'bottomright'

type PlacedGalleryItem = {
    id: number;
    type: 'video' | 'img';
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
        {items.map(({ id, type, source, xOffset, yOffset, scale, caption, captionSpot }) =>
            <GalleryItem id={id} type={type} source={source} xOffset={xOffset} yOffset={yOffset} scale={scale} caption={caption} captionSpot={captionSpot} />
        )
        }
    </div >
}

const ProjectGallery = () => {
    const sockyItem: PlacedGalleryItem = {
        id: 1,
        type: 'video',
        source: SockyDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 0.8,
        caption: 'socky',
        captionSpot: 'topleft',
    }

    const tronItem: PlacedGalleryItem = {
        id: 2,
        type: 'video',
        source: TronDemo,
        xOffset: 25,
        yOffset: 40,
        scale: 1.3,
        caption: 'tron bot',
        captionSpot: 'bottomright',
    }

    const jtItem: PlacedGalleryItem = {
        id: 3,
        type: 'video',
        source: JournalTexterDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 1.5,
        caption: 'journaltexter',
        captionSpot: 'bottomright',
    }

    const vtItem: PlacedGalleryItem = {
        id: 4,
        type: 'img',
        source: VisualTransformersDemo,
        xOffset: 0,
        yOffset: 0,
        scale: 1,
        caption: 'visual transformers',
        captionSpot: 'topright',
    }

    return <div className="page">
        <div className="video-gallery">
            <GalleryRow items={[sockyItem, tronItem]} />
            <div className="row-spacer-big"/>
            {/* <div className="row-spacer"/> */}
            <GalleryRow items={[jtItem, vtItem]} />
        </div>
    </div >
}

export default ProjectGallery;