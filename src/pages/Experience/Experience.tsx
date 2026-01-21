import FloatingBox from "../../components/FloatingBox/FloatingBox";

const msftContent = " Architected and built a full-stack web application (“SKULens”) through a serverless Azure Durable Functions API and a Typescript React static web frontend to migrate away from legacy python scripts and display metrics, charts, and reports related to hardware testing"
const brownTAContent = <ul>
    <li>Assisted staff in redesigning course website in HTML/CSS/JS/Figma to fit early 2000's theme for the spring 2022 semester</li>
    <li>Added draggable windows in Javascript and improved ease of access for student resources [Link] [Github]</li>
    <li>Assisted teaching staff in creating course content and presentations for an introductory course of 200+ undergraduates</li>
    <li>Taught students foundational concepts of functional programming and data manipulation at lab sessions and teaching hours</li>
</ul>

const Experience = () => {
    return <div className="page">
        <h1 className="text-center page-title">my experience</h1>
        <div className="floating-box-container">
            <FloatingBox title={"Microsoft, Azure Storage"} subtitle={"Software Engineer"} datesString={"Aug 2023 - Sept 2025"} content={msftContent} />
            <FloatingBox title={"Brown University Dept. of Computer Science"} subtitle={"Undergraduate Teaching Assistant"} datesString={"Sep 2021 - Dec 2023"} content={brownTAContent} />
        </div>
    </div>
};

export default Experience;