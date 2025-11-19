import { Link } from "react-router-dom";
import { creatorData } from "../../../services/data/creatorData.js";

function HorizontalBanner({ className }) {
    const { author, contact } = creatorData;

    return (
        <div className={`${className} w-full h-full`}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                {/* Line Behind Horizontal Banner */}
                <polygon points="100,20 100,70 0,100 12,48" fill="red" />

                {/* Horizontal Banner with Text */}
                <polygon points="100,21 100,70 0,100 12,49" fill="white" />

                {/* Inner Black Banner Line */}
                <polygon points="100,25 100,37 12,65 12,52" fill="black" />
            </svg>

            <div className="absolute top-[50%] left-[49%] w-[80%] max-w-[40vw] flex flex-col gap-2 text-lg -rotate-10 z-20 font-skipstdb">
                {author.profileData.map((data, index) => (
                    <p key={index} className="text-pretty">
                        {data}
                    </p>
                ))}
            </div>

            {/* Contact Area */}
            <article className="absolute top-[23%] left-[49%] flex gap-3 -rotate-9 z-10 font-skipstdb">
                {contact.map((method, index) => (
                    <Link
                        to={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="w-[7vw] h-[19vh] flex flex-col bg-black p-1 group hover:cursor-pointer"
                    >
                        <div className="flex-1 flex items-center justify-center color-bg-details-nineth group-hover:bg-white">
                            <method.icon className="w-full h-auto color-text-details-fourth group-hover:text-black p-3 pointer-events-none" />
                        </div>

                        <span className="w-full text-xl text-center p-1 text-[#183291] color-bg-details-seventh group-hover:text-white group-hover:bg-black pointer-events-none select-none">
                            {method.name}
                        </span>
                    </Link>
                ))}
            </article>
        </div>
    );
}

export default HorizontalBanner;
