import { Link } from "react-router-dom";
import { creatorData } from "../../../services/data/creatorData.js";

function HorizontalBanner() {
    const { author, contact } = creatorData;

    return (
        <section
            className={
                "flex flex-col gap-4 w-full pt-8 pb-30 px-6 mx-auto bg-white border-t-4 border-red-500 lg:border-t-6 lg:p-6 lg:mx-0 xl:bg-white"
            }
        >
            {/* Black Line */}
            <div className="hidden lg:block w-full h-[8vh] bg-black"></div>

            {/* Description */}
            <div className="flex flex-col gap-8 lg:mx-auto lg:max-w-[40vw]">
                <div className=" flex flex-col gap-6 z-20 font-skipstdb">
                    {/* Mobile Only */}
                    <h2 className="w-fit relative -left-6 text-2xl px-6 border-b-4 border-black lg:hidden">
                        About me
                    </h2>

                    {author.profileData.map((data, index) => (
                        <p
                            key={index}
                            className="text-pretty text-base sm:text-lg"
                        >
                            {data}
                        </p>
                    ))}
                </div>

                {/* Contact Area */}
                <article className=" gap-3 mx-auto z-10 font-skipstdb lg:block lg:w-full lg:absolute lg:-top-18">
                    <div className="grid grid-cols-2 gap-3 w-fit">
                        {contact.map((method, index) => (
                            <Link
                                to={method.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="flex flex-col bg-black p-1 group hover:cursor-pointer"
                            >
                                <div className="flex-1 flex items-center justify-center color-bg-details-nineth group-hover:bg-white">
                                    <method.icon className="w-full h-auto color-text-details-fourth group-hover:text-black p-3 pointer-events-none" />
                                </div>

                                <span className="w-full text-xl text-center p-1 text-[#183291] color-bg-details-seventh group-hover:text-white group-hover:bg-black pointer-events-none select-none">
                                    {method.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default HorizontalBanner;
