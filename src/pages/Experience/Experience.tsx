import FloatingBox from "../../components/FloatingBox/FloatingBox";

const msftContent = " Architected and built a full-stack web application (“SKULens”) through a serverless Azure Durable Functions API and a Typescript React static web frontend to migrate away from legacy python scripts and display metrics, charts, and reports related to hardware testing"


const Experience = () => {
    return <div className="page">
        <h1 className="text-center">experience</h1>
        <div className="floating-box-container">
            <FloatingBox title={"Microsoft, Azure Storage"} subtitle={"Software Engineer"} datesString={"Aug 2023 - Sept 2025"} content={msftContent} />
            <FloatingBox title={"Microsoft, Azure Storage"} subtitle={"Software Engineer"} datesString={"Aug 2023 - Sept 2025"} content={msftContent} />
        </div>
    </div>
};

export default Experience;