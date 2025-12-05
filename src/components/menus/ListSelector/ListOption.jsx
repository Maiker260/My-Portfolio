import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Roman from "roman-numerals";
import CardNumberIcon from "../../icons/CardNumberIcon.jsx";

function ListOption({ item, index }) {
    const { name, listName, title, years } = item;
    const innerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (innerRef.current) {
            const { width, height } = innerRef.current.getBoundingClientRect();
            setSize({ width, height });
        }
    }, []);

    const offset =
        index === 0
            ? "0"
            : window.innerWidth < 640
            ? `${(index + 1) * 0.1}em` // mobile
            : `${(index + 1) * 0.6}em`; // desktop

    return (
        <Link
            to={`${index}`}
            className={`relative flex flex-col h-fit w-[90%] snap-start group hover:cursor-pointer`}
            style={{ marginLeft: offset }}
        >
            {/* External Container used for Hover */}
            <div
                className={"hidden md:block w-full group-hover:bg-red-500"}
                style={{
                    height: `${size.height}px`,
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            />

            {/* Inner Container */}
            <div
                ref={innerRef}
                className="transition w-full h-fit relative px-4 py-2 md:absolute md:top-1 md:-left-2 color-bg-details-eight group-hover:bg-white group-hover:text-black"
                style={{
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            >
                <div className="flex flex-col w-full h-fit">
                    {/* Top */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <CardNumberIcon number={Roman.toRoman(index + 1)} />
                            <span className="text-base lg:text-2xl xl:text-3xl color-text-details-fourth group-hover:text-black">
                                {listName || name}
                            </span>
                        </div>
                        {years && (
                            <div className="self-end items-center flex gap-2">
                                <span className="text-base lg:text-2xl xl:text-3xl self-end color-text-details-fourth group-hover:text-black">
                                    Years
                                </span>
                                <span className="text-xl lg:text-4xl xl:text-5xl self-end color-text-details-fourth group-hover:text-black">
                                    {years}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Bottom */}
                    <span className="text-base lg:text-xl xl:text-2xl px-1 border color-bg-details-seventh text-center group-hover:text-white group-hover:bg-black">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ListOption;
