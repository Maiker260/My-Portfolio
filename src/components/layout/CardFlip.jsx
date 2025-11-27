import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";

function CardFlip({
    className,
    id,
    data,
    buttonPressed,
    changeContent,
    setChangeContent,
    setIsFlipping,
}) {
    const [frontImageData, setFrontImageData] = useState(data[id]);
    const [rotation, setRotation] = useState(180);

    useEffect(() => {
        if (!changeContent) return;

        setRotation((prev) => prev + (buttonPressed === "next" ? 180 : -180));

        setTimeout(() => {
            setFrontImageData(data[id]);
        }, 210);

        setTimeout(() => {
            setChangeContent(false);
            setIsFlipping(false);
        }, 500);
    }, [
        changeContent,
        buttonPressed,
        id,
        data,
        setChangeContent,
        setIsFlipping,
    ]);

    return (
        <div
            className={`relative size-full ${className}`}
            style={{
                perspective: "1000px",
            }}
        >
            <Motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                className="size-full"
            >
                {/* BACK SIDE */}
                <div
                    className="absolute size-full rounded-xl backface-hidden animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/other/card.webp"
                        alt="card back"
                        draggable={false}
                        className="rounded-xl size-full object-cover"
                    />
                </div>

                {/* FRONT SIDE */}
                <div
                    className="absolute size-full p-2 bg-white rounded-xl backface-hidden animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src={frontImageData.logo}
                        alt="card front"
                        draggable={false}
                        className="size-full object-contain rounded-xl"
                    />
                </div>
            </Motion.div>
        </div>
    );
}

export default CardFlip;
