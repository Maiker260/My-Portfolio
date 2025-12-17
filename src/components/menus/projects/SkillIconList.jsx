function SkillIconList({ skills, hoveredSkill, setHoveredSkill, className }) {
    return (
        <article className={className}>
            {skills.map(({ name, icon: Icon }, index) => (
                <div
                    key={index}
                    className="size-full max-w-[40px] rounded-full bg-main-color-details flex items-center justify-center md:max-w-[50px] 2xl:max-w-[60px]"
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
