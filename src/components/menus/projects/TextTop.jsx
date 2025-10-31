import SkillIconList from "./SkillIconList.jsx";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import AnimatedBump from "../../animations/AnimatedBump.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import ItemNavButton from "../../ItemNavButton.jsx";

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

    // Less than 0, go to the last project, if reaches the last project, then, go to the first project.
    const changeProject = (page) => {
        const projectId =
            page < 0
                ? Number(totalProjects - 1)
                : page > Number(totalProjects - 1)
                ? 0
                : page;

        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="relative z-50 -rotate-8 flex flex-col gap-8 font-rodin">
            {/* Rotated Text */}
            <div className="ml-3 h-fit w-full flex items-center gap-10">
                <ItemNavButton
                    name={"prev"}
                    setButtonPressed={setButtonPressed}
                    id={id}
                    changeItem={changeProject}
                />
                <AnimatedBump
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                    className={"h-full"}
                >
                    <h2 className="text-6xl sm:text-4xl md:text-5xl color-text-details-secund opacity-80">
                        {title}
                    </h2>
                    <h1 className="text-3xl sm:text5xl md:text-6xl font-bold color-text-details-main color-text-details-third">
                        {name}
                    </h1>
                </AnimatedBump>
                <ItemNavButton
                    name={"next"}
                    setButtonPressed={setButtonPressed}
                    id={id}
                    changeItem={changeProject}
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
