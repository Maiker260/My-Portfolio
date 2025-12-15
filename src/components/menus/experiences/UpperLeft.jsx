import { Link, useNavigate } from "react-router-dom";
import ItemNavButton from "../../ItemNavButton.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";
import { changeItem } from "../../../utils/changeItem.js";
import AnimatedBump from "./animations/AnimatedBump.jsx";

function UpperLeft({
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

    const isMobile = window.innerWidth > 1024;

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
                <div className="relative -left-5 size-full lg:left-0">
                    {/* External Container */}
                    <div
                        className="w-[101%] h-full color-bg-details-nineth opacity-70 z-0 lg:absolute lg:top-0 lg:left-0"
                        // className="absolute top-0 left-0 w-[101%] h-full color-bg-details-nineth opacity-70 z-0"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                        }}
                    />

                    {/* Internal Container */}
                    <div
                        className="relative -top-1 size-full pt-2 pr-2 bg-white z-10 lg:-top-2"
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
                            <section className="bg-white font-skipstdb">
                                <div className="flex flex-col p-3 lg:flex lg:justify-center lg:items-center lg:pl-4 lg:pr-8 lg:py-7">
                                    <h2 className="w-full text-2xl text-center lg:text-5xl">
                                        {job.name}
                                    </h2>
                                    <div className="self-end flex gap-1 w-auto items-center lg:gap-3">
                                        <span className="text-lg lg:text-3xl">
                                            Years
                                        </span>
                                        <span className="text-2xl font-rodin lg:text-6xl">
                                            {job.years}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Job Responsabilities */}
                <div className="flex flex-col items-center gap-6 py-4 px-4 lg:px-13">
                    {/* <div className="flex flex-col items-center gap-6 p-4 px-13"> */}
                    <ul className="flex flex-col gap-4 lg:gap-6">
                        {job.responsabilities &&
                            job.responsabilities.map(
                                (responsability, index) => (
                                    <li
                                        key={index}
                                        className="text-base text-white list-disc text-pretty leading-7 font-skipstdb lg:text-2xl "
                                    >
                                        {responsability}
                                    </li>
                                )
                            )}
                    </ul>
                    <div className="w-full flex justify-center font-rodin">
                        <Link
                            to={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:cursor-pointer"
                        >
                            <div className="p-2 color-text-details-third color-bg-details-secund flex gap-2 items-center rounded text-2xl transition group-hover:color-bg-details-fifth">
                                <span className="transition group-hover:text-neutral">
                                    More
                                </span>
                                <OpenInNew
                                    className={
                                        "w-8 h-8 fill-select-icons transition group-hover:color-icons-neutral"
                                    }
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </AnimatedBump>
        </section>
    );
}

export default UpperLeft;
