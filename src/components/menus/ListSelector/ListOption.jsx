import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Roman from "roman-numerals";
import CardNumberIcon from "../../icons/CardNumberIcon.jsx";

function ListOption({ item, index }) {
    const { name, title, years } = item;
    const innerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (innerRef.current) {
            const { width, height } = innerRef.current.getBoundingClientRect();
            setSize({ width, height });
        }
    }, []);

    const externalContClasses = { height: `${size.height}px` };

    return (
        <Link
            to={`${index}`}
            className={`relative flex flex-col h-fit w-[90%] snap-start group hover:cursor-pointer`}
            style={{ marginLeft: `${(index + 1) * 1}em` }}
        >
            {/* External Container used for Hover */}
            <div
                className={"w-full group-hover:bg-red-500"}
                style={{
                    ...externalContClasses,
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            ></div>
            {/* Inner Container */}
            <div
                ref={innerRef}
                className="transition absolute top-1 -left-2 w-full h-fit px-4 py-2 color-bg-details-eight group-hover:bg-white group-hover:text-black"
                style={{
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            >
                <div className="flex flex-col w-full h-fit">
                    {/* Top */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <CardNumberIcon number={Roman.toRoman(index + 1)} />
                            <span className="color-text-details-fourth text-3xl group-hover:text-black">
                                {name}
                            </span>
                        </div>
                        {years && (
                            <div className="self-end flex gap-2">
                                <span className="self-end color-text-details-fourth text-3xl group-hover:text-black">
                                    Years
                                </span>
                                <span className="self-end color-text-details-fourth text-5xl group-hover:text-black">
                                    {years}
                                </span>
                            </div>
                        )}
                    </div>
                    {/* Bottom */}
                    <span className="border color-bg-details-seventh text-center text-2xl group-hover:text-white group-hover:bg-black">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ListOption;
