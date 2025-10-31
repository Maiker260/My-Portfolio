import ItemNavButton from "../../ItemNavButton.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";

function UpperLeft() {
    return (
        <section className="flex flex-col h-full w-full font-rodin">
            <h1 className="relative top-0 text-7xl tracking-[-0.1em] leading-[0.9] align-top p-0 select-none text-white">
                EXPERIENCE
            </h1>
            <div className=" relative w-full h-full">
                {/* External Container */}
                <div
                    className="absolute top-0 left-0 w-[101%] h-full color-bg-details-nineth opacity-70 z-0"
                    style={{
                        clipPath: "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
                    }}
                />

                {/* Internal Container */}
                <div
                    className="relative -top-2 w-full h-full pt-2 pr-2 bg-white z-10"
                    style={{
                        clipPath: "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)",
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
                            <ItemNavButton name={"prev"} />
                            <ItemNavButton name={"next"} />
                        </section>
                        <section className="bg-white font-skipstdb">
                            <div className="flex justify-center items-center pl-4 pr-8 py-7 ">
                                <h2 className="text-5xl w-full text-center">
                                    VMware
                                </h2>
                                <div className="flex gap-3 w-auto items-center">
                                    <span className="text-3xl">Years</span>
                                    <span className="text-6xl">5</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 p-4 px-6">
                <ul className="flex flex-col gap-4">
                    <li className="text-white text-2xl text-balance leading-7 font-skipstdb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi officia mollitia quaerat incidunt nobis iste?
                    </li>
                    <li className="text-white text-2xl text-balance leading-7 font-skipstdb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi officia mollitia quaerat incidunt nobis iste?
                    </li>
                    <li className="text-white text-2xl text-balance leading-7 font-skipstdb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi officia mollitia quaerat incidunt nobis iste?
                    </li>
                </ul>
                <div className="w-full flex justify-center font-rodin">
                    <button
                        // to={codeURL}
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
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UpperLeft;
