import { motion as Motion } from "motion/react";

function CardFlip({ className }) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                perspective: "1000px",
            }}
        >
            <Motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                transition={{ duration: 1.3 }}
                style={{
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                {/* BACK SIDE */}
                <div
                    className="absolute w-full h-full rounded-xl backface-hidden shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/other/card.png"
                        alt="card back"
                        className="rounded-xl perspective-distant shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
                    />
                </div>

                {/* FRONT SIDE */}
                <div
                    className="absolute w-full h-full rounded-xl backface-hidden shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src="/companyLogos/mcdonalds-logo.jpg"
                        alt="card front"
                        className="rounded-xl perspective-distant shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
                    />
                </div>
            </Motion.div>
        </div>
    );
}

export default CardFlip;
