import { Github } from "../../icons/Github.jsx";

function SkillIconList({ icons }) {
    return (
        <article className="flex gap-4 items-center absolute bottom-5 left-24 transform -rotate-8 origin-bottom-left">
            {icons.map(({ name, icon: Icon }, index) => (
                <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-main-color-details flex items-center justify-center"
                    title={name}
                >
                    <Icon
                        className={
                            "pointer-events-none color-bg-details-secund rounded-full p-1"
                        }
                    />
                </div>
            ))}
        </article>
    );
}

export default SkillIconList;
