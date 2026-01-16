import TronDemo from '../../assets/videos/tron-demo.mp4'
import SectionBoxWithPopup from "../../components/FloatingBox/FloatingBoxExpandable";

const Projects = () => {
    const tronDescription = <div>
        <ul>
            <li>
                Worked with a partner and implemented the alpha-beta algorithm with a
                depth and time cutoff and a relevant breadth first search-based Voronoi
                heuristic within Python
            </li>
            <li>Iterated over several variations to develop a bot that could consistently
                beat a similar bot that also utilized an alpha-beta cutoff and Voronoi heuristic
                with a win rate above 70%
            </li>
        </ul>
    </div>

    return <div className="page">
        <h1 className="text-center page-title">projects</h1>
        <div className="floating-box-container">
            <SectionBoxWithPopup title={"Tron Bot"} content={tronDescription} video={TronDemo} videoId={0} />
        </div>
    </div>
};

export default Projects;