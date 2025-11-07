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

    return (
        <section className="flex flex-col h-full w-full font-rodin">
            <h1 className="relative top-0 left-5 text-7xl tracking-[-0.1em] leading-[0.9] align-top p-0 select-none text-white">
                EXPERIENCE
            </h1>
            <AnimatedBump
                changeContent={changeContent}
                setChangeContent={setChangeContent}
                component={"upperLeft"}
                className={"h-full"}
            >
                <div className=" relative w-full h-full">
                    {/* External Container */}
                    <div
                        className="absolute top-0 left-0 w-[101%] h-full color-bg-details-nineth opacity-70 z-0"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                        }}
                    />

                    {/* Internal Container */}
                    <div
                        className="relative -top-2 w-full h-full pt-2 pr-2 bg-white z-10"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                        }}
                    >
                        <div
                            className="w-full h-full flex flex-col"
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                            }}
                        >
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
                            <section className="bg-white font-skipstdb">
                                <div className="flex justify-center items-center pl-4 pr-8 py-7 ">
                                    <h2 className="text-5xl w-full text-center">
                                        {job.name}
                                    </h2>
                                    <div className="flex gap-3 w-auto items-center">
                                        <span className="text-3xl">Years</span>
                                        <span className="text-6xl font-rodin">
                                            {job.years}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 p-4 px-13">
                    <ul className="flex flex-col gap-6">
                        {job.responsabilities &&
                            job.responsabilities.map(
                                (responsability, index) => (
                                    <li
                                        key={index}
                                        className="text-white list-disc text-2xl text-pretty leading-7 font-skipstdb"
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
