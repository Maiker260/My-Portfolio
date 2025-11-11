import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";

function SkillCardFlip({
    className,
    skillSelected,
    changeContent,
    setIsCardFlipping,
    setChangeContent,
}) {
    const [frontImageData, setFrontImageData] = useState(skillSelected.img);
    const [skillName, setSkillName] = useState(
        skillSelected.name.toUpperCase()
    );
    const [rotation, setRotation] = useState(180);
    const [showFront, setShowFront] = useState(true);

    useEffect(() => {
        if (!changeContent) return;

        setRotation((prev) => prev + 360);

        setTimeout(() => {
            setShowFront(false);

            const nextImg = new Image();
            nextImg.src = skillSelected.img;
            nextImg.onload = () => setFrontImageData(skillSelected.img);

            setSkillName(skillSelected.name.toUpperCase());
        }, 400);

        setTimeout(() => {
            setShowFront(true);
            setChangeContent(false);
        }, 400);
    }, [changeContent, setChangeContent, skillSelected]);

    return (
        <div
            className={`relative w-full h-full p-3 ${className}`}
            style={{
                perspective: "1000px",
            }}
        >
            <Motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                onAnimationComplete={() => {
                    setIsCardFlipping(false);
                }}
                className="w-full h-full"
            >
                {/* BACK SIDE */}
                <div
                    className="absolute w-full h-full rounded-lg backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/other/card.png"
                        alt="card back"
                        draggable={false}
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>

                {/* FRONT SIDE */}
                <div
                    className="absolute w-full h-full rounded-lg backface-hidden"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {showFront && (
                        <article className="flex flex-col items-center justify-center h-full gap-4 p-4 text-lg font-semibold color-bg-details-eight text-menu-cyan-main rounded-lg shadow-md">
                            <div className="w-full h-full color-bg-details-seventh p-4 rounded-lg">
                                <img
                                    src={frontImageData.logo}
                                    alt="card front"
                                    draggable={false}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <span>{skillName}</span>
                        </article>
                    )}
                </div>
            </Motion.div>
        </div>
    );
}

export default SkillCardFlip;
