function SkillCarouselPaging({ skills, currentSkill, setCurrentSlide }) {
    const cardSelectedClasses = (name) =>
        name === currentSkill ? "opacity-100" : "opacity-60";

    return (
        <section className="flex gap-3 w-fit">
            {skills?.map((skill, i) => (
                <button
                    key={i}
                    className={`w-15 h-20 p-2 rotate-15 ${cardSelectedClasses(
                        skill
                    )} rounded-md flex items-center bg-white justify-center cursor-pointer`}
                    onClick={() => {
                        setCurrentSlide(i);
                    }}
                >
                    <img
                        src={`/skillsLogos/${skills[i].img}`}
                        alt={`${skills[i].name} image`}
                        className="w-full h-full object-contain transition"
                    />
                </button>
            ))}
        </section>
    );
}

export default SkillCarouselPaging;
