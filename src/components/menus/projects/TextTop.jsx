import SkillIconList from "./SkillIconList.jsx";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { testProjectData } from "../../../services/data/Projects.jsx";

function TextTop({ hoveredSkill, setHoveredSkill }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const totalProjects = testProjectData.length;

    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { name, type, skills } = project;

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
        <div className="absolute origin-top-left top-[14vh] left-[5%] h-[35%] w-[35vw] bg-red z-50 -rotate-8 flex flex-col gap-8">
            {/* Rotated Text */}
            <div className="ml-3 h-fit flex items-center gap-10">
                <button
                    className="flex gap-1 text-4xl text-white group transition hover:cursor-pointer hover:scale-110"
                    onClick={() => changeProject(Number(id) - 1)}
                >
                    <span>&#10094;</span>
                    <h2>Prev</h2>
                </button>
                <div>
                    <h2 className="text-6xl sm:text-4xl md:text-5xl color-text-details-secund opacity-80">
                        {type}
                    </h2>
                    <h1 className="mt-1 text-7xl sm:text5xl md:text-6xl font-bold color-text-details-main color-text-details-third">
                        {name}
                    </h1>
                </div>
                <button
                    className="flex gap-1 text-4xl text-white group transition hover:cursor-pointer hover:scale-110"
                    onClick={() => changeProject(Number(id) + 1)}
                >
                    <h2>Next</h2>
                    <span>&#10095;</span>
                </button>
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
