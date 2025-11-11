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
    const [showFront, setShowFront] = useState(true);

    useEffect(() => {
        if (!changeContent) return;

        setRotation((prev) => prev + (buttonPressed === "next" ? 180 : -180));

        setTimeout(() => {
            setShowFront(false);

            const nextImg = new Image();
            nextImg.src = data[id].logo;
            nextImg.onload = () => setFrontImageData(data[id]);
        }, 300);

        setTimeout(() => {
            setShowFront(true);
            setChangeContent(false);
        }, 300);
    }, [changeContent, buttonPressed, id, data, setChangeContent]);

    return (
        <div
            className={`relative w-full h-full ${className}`}
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
                onAnimationComplete={() => {
                    setIsFlipping(false);
                }}
                className="w-full h-full"
            >
                {/* BACK SIDE */}
                <div
                    className="absolute w-full h-full rounded-xl backface-hidden animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/other/card.png"
                        alt="card back"
                        draggable={false}
                        className="rounded-xl w-full h-full object-cover"
                    />
                </div>

                {/* FRONT SIDE */}
                <div
                    className="absolute w-full h-full p-2 bg-white rounded-xl backface-hidden animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {showFront && (
                        <img
                            src={frontImageData.logo}
                            alt="card front"
                            draggable={false}
                            className="w-full h-full object-contain rounded-xl"
                        />
                    )}
                </div>
            </Motion.div>
        </div>
    );
}

export default CardFlip;
