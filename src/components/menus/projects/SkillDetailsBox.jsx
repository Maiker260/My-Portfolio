function SkillDetailsBox() {
    const skills = [
        { name: "TESTING 1", hasColor: true },
        { name: "TESTING 2", hasColor: false },
        { name: "TESTING 3", hasColor: false },
        { name: "TESTING 4", hasColor: true },
        { name: "TESTING 5", hasColor: true },
        { name: "TESTING 6", hasColor: false },
        { name: "TESTING 7", hasColor: false },
        { name: "TESTING 8", hasColor: true },
    ];

    return (
        <div className="absolute top-[55%] left-0 h-[25%] w-[45vw] ml-7 color-bg-details-secund z-50 p-2 origin-top-left text-white">
            <div className="grid grid-cols-2 grid-rows-5 w-full h-full">
                <div className="text-red-500 color-bg-details-third-gradient col-span-2">
                    TESTING
                </div>
                {skills.map((skill) => (
                    <div
                        className={`${
                            skill.hasColor
                                ? "color-bg-details-fourth"
                                : "color-bg-details-secund"
                        } w-full h-full flex justify-center items-center`}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillDetailsBox;
