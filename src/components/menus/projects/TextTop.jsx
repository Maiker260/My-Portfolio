import SkillIconList from "./SkillIconList.jsx";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { useParams } from "react-router-dom";

function TextTop({ hoveredSkill, setHoveredSkill }) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { name, type, skills } = project;

    return (
        <div className="absolute origin-top-left top-[14vh] left-[5%] h-[35%] w-[35vw] bg-red z-50 -rotate-8 flex flex-col gap-8">
            {/* Rotated Text */}
            <div className="ml-15 h-fit">
                <h2 className="text-6xl sm:text-4xl md:text-5xl color-text-details-secund opacity-80">
                    {type}
                </h2>
                <h1 className="mt-1 text-7xl sm:text5xl md:text-6xl font-bold color-text-details-main color-text-details-third">
                    {name}
                </h1>
            </div>

            {/* Icons */}
            <div>
                <SkillIconList
                    skills={skills}
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                    className={"flex gap-4 items-center"}
                />
            </div>
        </div>
    );
}

export default TextTop;
