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
        <div className="relative flex flex-col gap-2 mx-auto font-rodin z-50 lg:gap-8 lg:max-w-[50vw]">
            <div className="w-fit h-fit flex gap-4 items-center m-auto lg:ml-3 lg:gap-10">
                <ItemNavButton
                    name="prev"
                    setButtonPressed={setButtonPressed}
                    id={id}
                    totalItems={totalProjects}
                    navigate={navigate}
                    changeItem={changeItem}
                    location={"projects"}
                    className={"text-lg"}
                />

                {/* Title */}
                <AnimatedBump
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                    className={
                        "w-fit h-full flex flex-col items-center text-center lg:text-left lg:gap-0"
                    }
                >
                    <h2 className="w-fit text-2xl color-text-details-secund opacity-80 lg:text-3xl xl:text-4xl">
                        {title}
                    </h2>
                    <h1 className="w-fit text-3xl leading-tight font-bold color-text-details-fourth lg:text-4xl xl:text-5xl">
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
                    className={"text-lg"}
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
                    className={
                        "flex gap-x-4 gap-y-2 items-center justify-center flex-wrap lg:justify-start"
                    }
                />
            </AnimatedBump>
        </div>
    );
}

export default TextTop;
