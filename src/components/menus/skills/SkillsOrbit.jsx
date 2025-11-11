// FOUND CODE SIMILAR TO THE LIBRARY "REACT PLANET"
import SkillCardFlip from "./SkillCardFlip.jsx";
import { motion as Motion } from "motion/react";
import Intro from "./animations/Intro.jsx";

export default function SkillsOrbit({
    id = null,
    skill,
    skillSelected,
    setSkillSelected,
    isCardFlipping,
    setIsCardFlipping,
    changeContent,
    setChangeContent,
}) {
    const abilities = skill.abilities;
    const size = 600; // logical coordinate space
    const center = size / 2; // center point
    const radius = 250; // orbit radius
    const circleRadius = 25; // each item's size
    const centerCardSize = { width: 220, height: 320 };

    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            <svg
                className="w-full h-full"
                viewBox={`0 0 ${size} ${size}`} // defines SVG coordinate system
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Orbiting circles */}
                {abilities.map((item, i) => {
                    const angle =
                        (i / abilities.length) * 2 * Math.PI - Math.PI / 2;
                    const orbitX = center + radius * Math.cos(angle);
                    const orbitY = center + radius * Math.sin(angle);

                    const isSelected = skillSelected === item;

                    return (
                        <g key={i}>
                            <Intro
                                tag="g"
                                start={{
                                    opacity: 0,
                                }}
                                end={{
                                    opacity: 1,
                                }}
                                delay={i * 0.6}
                            >
                                {/* Placeolder */}
                                <Motion.circle
                                    r={circleRadius}
                                    fill="#fff"
                                    initial={{
                                        x: center,
                                        y: center,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: orbitX,
                                        y: orbitY,
                                        opacity: isSelected ? 0.3 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 18,
                                    }}
                                    className="pointer-events-none"
                                />

                                {/* Main Circle */}
                                <Motion.g
                                    key={i}
                                    className={"cursor-pointer relative -z-10"}
                                    initial={{
                                        x: center,
                                        y: center,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: isSelected ? center : orbitX,
                                        y: isSelected ? center : orbitY,
                                        opacity: isSelected ? 0 : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 18,
                                    }}
                                    onClick={() => {
                                        if (!isCardFlipping) {
                                            setIsCardFlipping(true);
                                            setSkillSelected(item);
                                            setChangeContent(true);
                                        }
                                    }}
                                >
                                    <circle
                                        r={circleRadius}
                                        fill={
                                            isSelected ? "#ff0000" : "#00ff00"
                                        }
                                    />
                                    <text
                                        y={5}
                                        textAnchor="middle"
                                        fontSize="16"
                                        fill="#262626"
                                        fontWeight="bold"
                                        className="pointer-events-none"
                                    >
                                        {item.name}
                                    </text>
                                </Motion.g>
                            </Intro>
                        </g>
                    );
                })}

                {/* Center card */}
                <foreignObject
                    x={center - centerCardSize.width / 2}
                    y={center - centerCardSize.height / 2}
                    {...centerCardSize}
                >
                    <Intro
                        start={{ scale: 0, opacity: 0 }}
                        end={{ scale: 1, opacity: 1 }}
                        className={"relative w-full h-full"}
                    >
                        <SkillCardFlip
                            skillSelected={skillSelected}
                            setIsCardFlipping={setIsCardFlipping}
                            changeContent={changeContent}
                            setChangeContent={setChangeContent}
                        />
                    </Intro>
                </foreignObject>
            </svg>
        </div>
    );
}
