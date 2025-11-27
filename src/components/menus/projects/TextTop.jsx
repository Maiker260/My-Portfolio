import SkillIconList from "./SkillIconList.jsx";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import AnimatedBump from "../../animations/AnimatedBump.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import ItemNavButton from "../../ItemNavButton.jsx";
import { changeItem } from "../../../utils/changeItem.js";

function TextTop({
    hoveredSkill,
    setHoveredSkill,
    buttonPressed,
    setButtonPressed,
}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const totalProjects = creatorData.projects.length;

    const projectDataFetched = useContext(ProjectDataContext);
    const project = projectDataFetched[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { name, title, skills } = project;

    return (
        <div className="relative flex flex-col gap-8 max-w-[50vw] font-rodin z-50">
            {/* Rotated Text */}
            <div className="ml-3 h-fit w-full flex items-center gap-10">
                <ItemNavButton
                    name="prev"
                    setButtonPressed={setButtonPressed}
                    id={id}
                    totalItems={totalProjects}
                    navigate={navigate}
                    changeItem={changeItem}
                    location={"projects"}
                />
                <AnimatedBump
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                    className={"h-full flex flex-col gap-0"}
                >
                    <h2 className="text-5xl color-text-details-secund opacity-80">
                        {title}
                    </h2>
                    <h1 className="text-6xl leading-tight font-bold color-text-details-fourth">
                        {name}
                    </h1>
                </AnimatedBump>
                <ItemNavButton
                    name={"next"}
                    setButtonPressed={setButtonPressed}
                    id={id}
                    totalItems={totalProjects}
                    navigate={navigate}
                    changeItem={changeItem}
                    location={"projects"}
                />
            </div>

            {/* Icons */}
            <AnimatedBump
                buttonPressed={buttonPressed}
                setButtonPressed={setButtonPressed}
            >
                <SkillIconList
                    skills={skills}
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                    className={"flex gap-4 items-center"}
                />
            </AnimatedBump>
        </div>
    );
}

export default TextTop;
