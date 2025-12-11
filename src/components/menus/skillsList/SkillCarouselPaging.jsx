function SkillCarouselPaging({
    className,
    skills,
    currentSkill,
    setCurrentSlide = () => {},
    changeCurrentSkill = () => {},
    isCardFlipping = false,
    setSkillSelected = () => {},
    setChangeContent = () => {},
}) {
    const cardSelectedClasses = (name) =>
        name === currentSkill ? "opacity-100" : "opacity-60 hover:opacity-80";

    return (
        <section className={`flex gap-3 w-fit ${className}`}>
            {skills?.map((skill, i) => (
                <button
                    key={i}
                    className={`w-[13vw] h-[10vh] p-2 rotate-15 ${cardSelectedClasses(
                        skill
                    )} rounded-md flex items-center bg-white justify-center cursor-pointer md:w-15 md:h-20`}
                    onClick={() => {
                        if (!isCardFlipping && skill !== currentSkill) {
                            setSkillSelected(skill.abilities[0]);
                            setChangeContent(true);
                            setCurrentSlide(i);
                            changeCurrentSkill(i);
                        }
                    }}
                >
                    <img
                        src={`/skillsLogos/${skills[i].img}`}
                        alt={`${skills[i].name} image`}
                        className="size-full object-contain transition"
                    />
                </button>
            ))}
        </section>
    );
}

export default SkillCarouselPaging;
