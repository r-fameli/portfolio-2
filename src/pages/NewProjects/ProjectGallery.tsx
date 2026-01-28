import "./ProjectGallery.scss";
import SockyDemo from "../../assets/videos/socky-demo.mp4";
import TronDemo from "../../assets/videos/tron-demo.mp4";
import JournalTexterDemo from "../../assets/videos/journaltexter-demo.mp4";
import VisualTransformersDemo from "../../assets/images/visual-transformers-poster.jpg";
import MediaCard from "./MediaCard";

type GalleryItemDetails = {
    id: number;
    type: "video" | "img";
    source: string;
    caption: string;
};

type RowProps = {
    item1?: GalleryItemDetails;
    item2?: GalleryItemDetails;
};

const GalleryRow = ({ item1, item2 }: RowProps) => {
    return (
        <div className="gallery-row">
            <div className="flex-col-start">
                {item1 && (
                    <div className="gallery-item">
                        <MediaCard
                            id={item1.id}
                            source={item1.source}
                            type={item1.type}
                        />
                        <h3>{item1.caption}</h3>
                    </div>
                )}
            </div>
            <div className="flex-col-end">
                {item2 && (
                    <div className="gallery-item">
                        <MediaCard
                            id={item2.id}
                            source={item2.source}
                            type={item2.type}
                        />
                        <h3>{item2.caption}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    const sockyItem: GalleryItemDetails = {
        id: 1,
        type: "video",
        source: SockyDemo,
        caption: "socky",
    };

    const tronItem: GalleryItemDetails = {
        id: 2,
        type: "video",
        source: TronDemo,
        caption: "tron bot",
    };

    const jtItem: GalleryItemDetails = {
        id: 3,
        type: "video",
        source: JournalTexterDemo,
        caption: "journaltexter",
    };

    const vtItem: GalleryItemDetails = {
        id: 4,
        type: "img",
        source: VisualTransformersDemo,
        caption: "visual transformers",
    };

    return (
        <div className="video-gallery">
            <GalleryRow item1={sockyItem} item2={tronItem} />
            <GalleryRow item1={jtItem} item2={vtItem} />
        </div>
    );
};

export default ProjectGallery;
