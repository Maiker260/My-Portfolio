import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";

function SkillDetailsBox({ hoveredSkill, setHoveredSkill }) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { skills, codeURL } = project;

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
        <article className="absolute top-[55%] left-0 h-[30%] w-[45vw] ml-7 border-3 border-main color-bg-details-secund z-50 p-2 origin-top-left text-white">
            <article className="w-full h-full">
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
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`${hoverGridClasses(
                                skill,
                                index
                            )} w-full h-full flex justify-center items-center font-rodin hover:cursor-pointer rounded`}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {hoveredSkill === skill.name ? (
                                <div className="flex justify-center items-center w-full h-full bg-menu-select-white rounded">
                                    {skill.name}
                                </div>
                            ) : (
                                skill.name
                            )}
                        </div>
                    ))}
                </div>
            </article>
            <div className="w-full mt-10 flex justify-center color-text-details-third font-rodin  ">
                <Link
                    to={codeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="p-2 color-bg-details-secund flex gap-2 items-center rounded text-2xl group-hover:color-bg-details-fifth">
                        <span className=" group-hover:text-neutral">Code</span>
                        <OpenInNew
                            className={
                                "w-8 h-8 fill-select-icons group-hover:color-icons-neutral"
                            }
                        />
                    </div>
                </Link>
            </div>
        </article>
    );
}

export default SkillDetailsBox;
