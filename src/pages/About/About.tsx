import type { RefObject } from "react";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>
}


const About = ({sentinelRef}: Props) => {
    return <div className="page" id="about" ref={sentinelRef}>
        <h1 className="text-center page-title">about me</h1>
    </div>

}

export default About;