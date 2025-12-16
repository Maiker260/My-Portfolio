import { useNavigate } from "react-router-dom";
import ItemNavButton from "../../ItemNavButton.jsx";
import { changeItem } from "../../../utils/changeItem.js";
import AnimatedBump from "./animations/AnimatedBump.jsx";
import JobResponsabilities from "./JobResponsabilities.jsx";

function JobTitleInfo({
    id,
    data,
    setButtonPressed,
    totalExperiences,
    changeContent,
    setChangeContent,
    isFlipping,
    setIsFlipping,
}) {
    const navigate = useNavigate();

    const job = data[id];

    return (
        <section className="flex flex-col size-full font-rodin">
            <h1 className="relative text-3xl tracking-[-0.1em] leading-[0.9] align-top p-0 select-none text-white lg:top-0 lg:left-5 lg:text-7xl">
                EXPERIENCE
            </h1>

            <AnimatedBump
                changeContent={changeContent}
                setChangeContent={setChangeContent}
                component={"upperLeft"}
                className={"h-full"}
            >
                <div className="relative -left-5 w-[107%] h-full sm:w-full lg:h-auto lg:left-0">
                    {/* External Container */}
                    <div
                        className="w-[101%] h-full color-bg-details-nineth opacity-70 z-0 lg:h-full lg:absolute lg:top-0 lg:left-0"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                        }}
                    />

                    {/* Internal Container */}
                    <div
                        className="relative -top-1 size-full pt-2 pr-2 bg-white z-10 lg:h-auto lg:-top-2"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                        }}
                    >
                        <div
                            className="size-full flex flex-col"
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                            }}
                        >
                            {/* Navigation Buttons */}
                            <section className="bg-black flex justify-between pl-4 pr-8 py-3">
                                <ItemNavButton
                                    id={id}
                                    name={"prev"}
                                    isFlipping={isFlipping}
                                    setIsFlipping={setIsFlipping}
                                    setButtonPressed={setButtonPressed}
                                    totalItems={totalExperiences}
                                    navigate={navigate}
                                    changeItem={changeItem}
                                    location={"experience"}
                                    moreActions={() => {
                                        setChangeContent(true);
                                    }}
                                />
                                <ItemNavButton
                                    id={id}
                                    name={"next"}
                                    isFlipping={isFlipping}
                                    setIsFlipping={setIsFlipping}
                                    setButtonPressed={setButtonPressed}
                                    totalItems={totalExperiences}
                                    navigate={navigate}
                                    changeItem={changeItem}
                                    location={"experience"}
                                    moreActions={() => {
                                        setChangeContent(true);
                                    }}
                                />
                            </section>

                            {/* Job Name */}
                            <section className="w-full max-w-[93%] bg-white font-skipstdb">
                                <div className="flex flex-col p-3 lg:flex lg:justify-center lg:items-center xl:py-4 2xl:pl-4 2xl:pr-8 2xl:py-7">
                                    <h2 className="w-full text-2xl text-center lg:text-3xl xl:text-5xl">
                                        {job.name}
                                    </h2>
                                    <div className="self-end flex gap-1 w-auto items-center lg:gap-3">
                                        <span className="text-lg lg:text-2xl xl:text-3xl">
                                            Years
                                        </span>
                                        <span className="text-2xl font-rodin lg:text-4xl xl:text-6xl">
                                            {job.years}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Job Responsabilities */}
                <div className="hidden lg:block">
                    <JobResponsabilities job={job} />
                </div>
            </AnimatedBump>
        </section>
    );
}

export default JobTitleInfo;
