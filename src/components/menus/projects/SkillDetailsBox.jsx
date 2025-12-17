import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";
import AnimatedBump from "../../animations/AnimatedBump.jsx";
import Intro from "./animations/Intro.jsx";

function SkillDetailsBox({
    hoveredSkill,
    setHoveredSkill,
    buttonPressed,
    setButtonPressed,
}) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { skills, codeURL } = project;

    // Always make sure to create 8 items to keep the grid.
    const filledSkills = [
        ...skills,
        ...Array(Math.max(0, 8 - skills.length)).fill({ name: "NONE" }),
    ];

    const hoverGridClasses = (skill, index) => {
        const columns = 2;
        const hasColor = (Math.floor(index / columns) + index) % 2 === 0;

        if (hoveredSkill === skill.name) {
            return "bg-menu-select-rose text-neutral-800 pt-1 pr-1";
        } else if (hasColor) {
            return "color-bg-details-fourth";
        } else {
            return "color-bg-details-secund";
        }
    };

    return (
        <AnimatedBump
            buttonPressed={buttonPressed}
            setButtonPressed={setButtonPressed}
            className={
                "size-full p-2 border-3 border-main text-white color-bg-details-secund origin-top-left lg:ml-7"
            }
        >
            <article className="size-full">
                <div className="grid grid-cols-2 grid-rows-5 size-full">
                    {/* Top Bar */}
                    <div className="relative flex justify-center content-center items-center col-span-2 mb-2 color-text-details-fourth font-rodin">
                        {/* Line behind the Title */}
                        <div className="absolute w-full h-2 color-bg-details-seventh flex justify-center items-center overflow-hidden"></div>

                        {/* Title */}
                        <div className="relative z-10 flex justify-center items-center h-full">
                            <span className="absolute text-xl px-8 color-bg-details-secund color-text-details-fourth z-40 lg:text-[2.3vw]">
                                SKILLS
                                <span className="text-sm lg:text-[2vw]">&</span>
                                TOOLS
                            </span>
                        </div>
                    </div>

                    {/* Grid */}
                    {filledSkills.map((skill, index) => (
                        <div
                            key={skill.name + index}
                            className={`${hoverGridClasses(skill, index)} 
                            ${
                                skill.name === "NONE" &&
                                "pointer-events-none text-[#5c5c5c]"
                            } size-full flex justify-center items-center text-sm rounded font-rodin lg:text-lg`}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {hoveredSkill === skill.name &&
                            skill.name !== "NONE" ? (
                                <span className="size-full flex justify-center items-center rounded bg-menu-select-white">
                                    {skill.name}
                                </span>
                            ) : (
                                <span>{skill.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </article>

            {/* Github button */}
            <div className="w-full flex justify-center font-rodin mt-10">
                <Link
                    to={codeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="flex gap-2 items-center text-2xl p-2 rounded color-text-details-fourth color-bg-details-secund transition group-hover:color-bg-details-fifth">
                        <span className="transition group-hover:text-neutral">
                            Code
                        </span>
                        <OpenInNew
                            className={
                                "w-8 h-8 fill-select-icons transition group-hover:color-icons-neutral"
                            }
                        />
                    </div>
                </Link>
            </div>
        </AnimatedBump>
    );
}

export default SkillDetailsBox;
