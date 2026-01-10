import { useState } from "react";
import './FloatingBoxExpandable.scss';

type Props = {
    title: string,
    content: React.ReactNode,
    video: string,
    videoId: number,
    repoLink?: string,
}

const FloatingBoxExpandable = ({ title, content, video, videoId, repoLink }: Props) => {
    const videoStringId = "demo-id-" + videoId;

    const [floatingBoxClass, setFloatingBoxClass] = useState("FloatingBoxWithPopup");
    const [popupClass, setPopupClass] = useState("FloatingBoxExpandable");
    const [isExpanded, setIsExpanded] = useState(false);
    const [suppressExpand, setSuppressExpand] = useState(false);

    const handleMouseEnter = () => {
        if (!isExpanded) {
            setFloatingBoxClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
            setPopupClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
        }
    }

    const handleMouseLeave = () => {
        if (!isExpanded) {
            setFloatingBoxClass("FloatingBoxExpandable")
            setPopupClass("FloatingBoxExpandable")
        }
    }

    const handleClick = () => {
        const clickedClass = "FloatingBoxExpandable-clicked"
        if (!suppressExpand) {
            if (floatingBoxClass.indexOf(clickedClass) === -1) {
                setIsExpanded(true)
                // Update classes
                setFloatingBoxClass("FloatingBoxExpandable FloatingBoxExpandable-clicked")
                setPopupClass("FloatingBoxExpandable FloatingBoxExpandable-clicked")
                // Play the demo video
                const videoComponent = document.querySelector('#' + videoId) as HTMLMediaElement;
                if (videoComponent) {
                    videoComponent.play();
                }
            } else {
                setIsExpanded(false)
                // Update classes
                setFloatingBoxClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
                setPopupClass("FloatingBoxExpandable FloatingBoxExpandable-hovered")
                // Pause the demo video
                const videoComponent = document.querySelector('#' + videoId) as HTMLMediaElement;
                if (videoComponent) {
                    videoComponent.pause();
                }
            }
        }
    }


    return <div
        className={floatingBoxClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
    >
        <div className="FloatingBoxExpandable-text">
            <h1>{title}</h1>
            {content}
            <div
                className="FloatingBoxExpandable-links"
                onMouseEnter={() => setSuppressExpand(true)}
                onMouseLeave={() => setSuppressExpand(false)}
            >
                {repoLink ?
                    <a href={repoLink} target="_blank" rel="noreferrer">
                        <button className="FloatingBoxExpandable-link-btn">repo</button>
                    </a>
                    :
                    <div></div>
                }

            </div>
        </div>
        <div className={popupClass}>
            <div className="FloatingBoxExpandable-tab">
                {isExpanded ? 'Click to hide demo' : "Click to show demo"}
            </div>
            <div className="FloatingBoxExpandable-frame">
                <video
                    className="FloatingBoxExpandable-video"
                    id={videoStringId}
                    muted
                    loop
                >
                    <source src={video} />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </div>
    </div>
}

export default FloatingBoxExpandable;