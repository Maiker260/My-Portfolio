import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export default function ReferenceOption({ index, total, item }) {
    const { section, url, refType } = item;
    const MOONPHASES = 8;
    const moonIndex = ((index - 1) % MOONPHASES) + 1;

    const innerRef = useRef(null);

    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (innerRef.current) {
            const { width, height } = innerRef.current.getBoundingClientRect();
            setSize({ width, height });
        }
    }, []);

    return (
        <Link
            to={url}
            target="_blank"
            className="relative flex flex-col self-end w-[95%] font-skipstdb group"
        >
            {/* External Container */}
            <div
                className={
                    "hidden md:block w-full -z-20 group-hover:bg-red-500 group-hover:relative group-hover:-left-5"
                }
                style={{
                    height: `${size.height}px`,
                }}
            />

            {/* Internal Container */}
            <article
                ref={innerRef}
                className="relative -z-10 w-full p-4 color-bg-details-eleventh color-text-details-seventh md:absolute group-hover:-left-7 group-hover:top-2 group-hover:bg-white group-hover:cursor-pointer"
            >
                {/* Inner Blue Figure */}
                <div
                    className="hidden absolute inset-0 bg-[#2555e7] group-hover:block -z-20"
                    style={{
                        clipPath:
                            "polygon(6% 0, 46% 0, 32% 101%, 0 101%, 0 45%)",
                    }}
                />

                {/* Little Triangle, upper left */}
                <div
                    className="absolute inset-0 bg-[#82aaf2] group-hover:hidden -z-20"
                    style={{
                        clipPath: "polygon(6% 0, 0 45%, 0 0)",
                    }}
                />

                {/* Inner Gray Figure */}
                <div
                    className="hidden absolute inset-0 bg-[#ededed] group-hover:block -z-20"
                    style={{
                        clipPath: "polygon(100% 30%, 92% 100%, 100% 100%)",
                    }}
                />

                <div className="flex items-center gap-1">
                    <div className="flex flex-[0.4] justify-center items-center gap-4 ml-3">
                        <p className="text-4xl font-rodin w-[5ch] text-center group-hover:text-white">
                            {index}/{total}
                        </p>

                        {/* Triangle */}
                        <svg
                            viewBox="0 0 24 16"
                            fill="currentColor"
                            className="w-10 h-10 block group-hover:fill-white"
                        >
                            <path d="M0 0 L12 20 L24 0 Z" />
                        </svg>

                        {/* Type */}
                        <p className="text-xl group-hover:text-white">
                            {refType}
                        </p>

                        {/* Moon Phase */}
                        <img
                            width="86"
                            height="86"
                            src={`/other/references/moonPhases/${moonIndex}.webp`}
                            alt="full-moon"
                        />
                    </div>

                    <div className="relative flex-[0.6]">
                        {/* Default Section */}
                        <div className="group-hover:hidden">
                            <h4 className="text-2xl p-1 px-4 color-text-details-seventh">
                                {section}
                            </h4>
                        </div>

                        {/* Section - URL (Hover) */}
                        <div className="hidden flex-col gap-2 absolute -top-12 min-w-0 group-hover:flex">
                            <h4 className="text-2xl p-1 px-4 bg-black text-white">
                                {section}
                            </h4>
                            <p className="text-base px-1 ld:text-xl lg:px-8 group-hover:text-black">
                                {url}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
