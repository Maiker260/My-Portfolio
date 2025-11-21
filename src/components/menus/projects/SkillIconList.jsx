function SkillIconList({ skills, hoveredSkill, setHoveredSkill, className }) {
    return (
        <article className={className}>
            {skills.map(({ name, icon: Icon }, index) => (
                <div
                    key={index}
                    className="size-full max-w-[60px] rounded-full bg-main-color-details flex items-center justify-center"
                    title={name}
                    onMouseEnter={() => setHoveredSkill(name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <Icon
                        className={`
                            ${
                                hoveredSkill === name
                                    ? "color-icons-light-blue scale-[120%] border-4 border-white"
                                    : "color-icons border-4 border-white"
                                // : "color-icons border-4 border-[#0c27b7]"
                            }
                        size-full pointer-events-none color-bg-details-secund rounded-full p-1.5`}
                    />
                </div>
            ))}
        </article>
    );
}

export default SkillIconList;
