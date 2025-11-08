// CODE SIMILAR TO THE LIBRARY "REACT PLANET"

export default function SkillsOrbit({
    skill,
    currentSkillCard,
    setCurrentSkillCard,
}) {
    const items = skill.abilities;
    const size = 600; // logical coordinate space
    const center = size / 2; // center point
    const radius = 250; // orbit radius
    const circleRadius = 25; // each item’s size
    const centerCardSize = { width: 200, height: 300 };

    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            <svg
                className="w-full h-full"
                viewBox={`0 0 ${size} ${size}`} // defines SVG coordinate system
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Center card */}
                <foreignObject
                    x={center - centerCardSize.width / 2}
                    y={center - centerCardSize.height / 2}
                    {...centerCardSize}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-4 p-4 text-lg font-semibold color-bg-details-eight text-menu-cyan-main rounded-xl shadow-md">
                        <div className="w-full h-full color-bg-details-seventh p-4 rounded-lg">
                            <img
                                src={`/skillsLogos/${skill.img}`}
                                alt={`${skill.name} image`}
                                className="w-full h-full object-contain transition"
                            />
                        </div>
                        <span>{currentSkillCard?.toUpperCase()}</span>
                    </div>
                </foreignObject>

                {/* Orbiting circles */}
                {items.map((name, i) => {
                    const angle = (i / items.length) * 2 * Math.PI;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);

                    return (
                        <g
                            key={i}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setCurrentSkillCard(name);
                            }}
                        >
                            <circle
                                cx={x}
                                cy={y}
                                r={circleRadius}
                                fill="#98fcfe"
                                className="transition-transform"
                            />
                            <text
                                x={x}
                                y={y + 5}
                                textAnchor="middle"
                                fontSize="16"
                                fill="#262626"
                                fontWeight="bold"
                            >
                                {name}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
