import { useState, useRef, useEffect } from "react";
import MenuItemHoverEffect from "../MenuItemHoverEffect.jsx";

function ListOption({ name, titleType, delay, index }) {
    const [isHovered, setIsHovered] = useState(false);

    const textRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (textRef.current) {
                const { width, height } =
                    textRef.current.getBoundingClientRect();
                setSize({ width, height });
            }
        }, 100); // match animation duration

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative inline-block font-bold text-7_5xl leading-none">
                {/* Black base text */}
                <span
                    ref={textRef}
                    className={`font-rodin text-menu-cyan-${titleType} opacity-0 animate-[fade-up_600ms_linear_forwards] tracking-[-0.12em] hover:text-black`}
                    style={{
                        zIndex: 20 - index * 2,
                        position: "relative",
                        animationDelay: delay,
                    }}
                >
                    {name}
                </span>

                {/* Show hover effect in the List Option */}
                {isHovered && size.width > 0 && (
                    <MenuItemHoverEffect
                        size={size}
                        index={index}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
}

export default ListOption;
