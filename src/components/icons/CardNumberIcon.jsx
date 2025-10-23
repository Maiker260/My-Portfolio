export function CardNumberIcon({
    number = "",
    rotation = 20,
    color = "#98fcfe",
    className,
}) {
    return (
        <svg
            viewBox="0 0 100 120"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-16 h-20 ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* Card Shape */}
            <rect
                x="10"
                y="10"
                width="80"
                height="100"
                rx="6"
                ry="6"
                stroke={color}
                fill="none"
                strokeWidth="4"
                className="group-hover:stroke-white group-hover:fill-black"
            />

            {/* Half-circle cutout (bottom center) */}
            <path
                d="M 38 104 A 8 6 0 0 1 62 104 L 62 112 L 38 112 Z"
                fill={color}
                className="group-hover:fill-white"
            />

            {/* Centered Number/Text */}
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="36"
                fontWeight="700"
                fill={color}
                fontFamily="serif"
                className="group-hover:fill-white"
            >
                {number}
            </text>
        </svg>
    );
}

export default CardNumberIcon;
