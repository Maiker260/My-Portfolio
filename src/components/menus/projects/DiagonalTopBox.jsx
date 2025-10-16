import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import SkillIconList from "./SkillIconList.jsx";

function DiagonalTopBox({ hoveredSkill, setHoveredSkill }) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { name, type, skills } = project;

    return (
        <section className="relative overflow-hidden color-bg-details-third h-[35vh]">
            {/* Diagonal background */}
            <div
                className="absolute inset-0 color-bg-details-secund color-text-details-main overflow-hidden"
                style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 26%, 0 100%)",
                }}
            >
                {/* Diagonal Border Line */}
                <div
                    className="absolute inset-0 color-bg-details-third-gradient"
                    style={{
                        clipPath:
                            "polygon(0px 85%, 100% 12%, 100% 26%, 0px 100%)",
                    }}
                />
                {/* Rotated text inside the diagonal box */}
                <div className="absolute bottom-[20%] left-[10%] sm:bottom-[15%] sm:left-[12%] md:bottom-[35%] md:left-[5%] transform -rotate-7 origin-top-left">
                    {/* <div className="absolute inset-0 flex flex-col justify-end items-start px-[10%] pb-[10%] transform -rotate-10 origin-top-left"> */}
                    <h1 className="text-[8vw] sm:text-7xl color-text-details-secund">
                        {type}
                    </h1>
                    <h2 className="mt-6 text-[5vw] sm:text-5xl font-bold color-text-details-main color-text-details-third">
                        {name}
                    </h2>
                </div>
                {/* Icons */}
                <div className="absolute inset-0">
                    <SkillIconList
                        skills={skills}
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                    />
                </div>
            </div>
        </section>
    );
}

export default DiagonalTopBox;
