import { Github } from "../../icons/Github.jsx";

function SkillIconList({ skills, hoveredSkill, setHoveredSkill }) {
    return (
        <article className="flex gap-4 items-center absolute bottom-5 left-24 transform -rotate-8 origin-bottom-left">
            {skills.map(({ name, icon: Icon }, index) => (
                <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-main-color-details flex items-center justify-center hover:cursor-pointer"
                    title={name}
                    onMouseEnter={() => setHoveredSkill(name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <Icon
                        className={`
                            ${
                                hoveredSkill === name
                                    ? "color-select-icons scale-[120%] border-2 border-white"
                                    : "color-icons"
                            }
                         pointer-events-none color-bg-details-secund rounded-full p-1 `}
                    />
                </div>
            ))}
        </article>
    );
}

export default SkillIconList;
