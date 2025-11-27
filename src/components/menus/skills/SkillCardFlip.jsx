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

    useEffect(() => {
        if (!changeContent) return;

        setRotation((prev) => prev + 360);

        setTimeout(() => {
            setFrontImageData(skillSelected.img);
            setSkillName(skillSelected.name.toUpperCase());
        }, 210);

        setTimeout(() => {
            setChangeContent(false);
            setIsCardFlipping(false);
        }, 400);
    }, [changeContent, setChangeContent, skillSelected, setIsCardFlipping]);

    return (
        <div
            className={`relative size-full p-3 ${className}`}
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
                className="size-full"
            >
                {/* BACK SIDE */}
                <div
                    className="absolute size-full rounded-lg backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/other/card.webp"
                        alt="card back"
                        draggable={false}
                        className="rounded-lg size-full object-cover"
                    />
                </div>

                {/* FRONT SIDE */}
                <div
                    className="absolute size-full rounded-lg backface-hidden"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <article className="flex flex-col items-center justify-center h-full gap-4 p-4 text-lg font-semibold color-bg-details-eight rounded-lg shadow-md">
                        <div className="size-full color-bg-details-seventh p-4 rounded-lg">
                            <img
                                src={frontImageData}
                                alt="card front"
                                draggable={false}
                                className="size-full object-contain rounded-lg"
                            />
                        </div>
                        <span className="text-menu-cyan-main text-center">
                            {skillName}
                        </span>
                    </article>
                </div>
            </Motion.div>
        </div>
    );
}

export default SkillCardFlip;
