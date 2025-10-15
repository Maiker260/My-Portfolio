import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";

function SkillDetailsBox() {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { skills } = project;

    return (
        <article className="absolute border-3 border-[#65dcfb] top-[55%] left-0 h-[30%] w-[45vw] ml-7 color-bg-details-secund z-50 p-2 origin-top-left text-white">
            <div className="grid grid-cols-2 grid-rows-5 w-full h-full">
                {/* Top Bar */}
                <div className="relative mb-2 color-text-details-third col-span-2 font-rodin flex justify-center content-center items-center">
                    {/* Line behind the text */}
                    <div className="absolute w-full h-2 color-bg-details-fifth flex justify-center items-center overflow-hidden"></div>
                    {/* Text */}
                    <div className="relative z-10 flex justify-center items-center h-full">
                        <span className="absolute text-5xl px-8 bg-black z-40 color-text-details-third">
                            SKILLS<span className="text-3xl">&</span>TOOLS
                        </span>
                    </div>
                </div>
                {/* Grid */}
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`${
                            skill.hasColor
                                ? "color-bg-details-fourth"
                                : "color-bg-details-secund"
                        } w-full h-full flex justify-center items-center font-rodin`}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </article>
    );
}

export default SkillDetailsBox;
