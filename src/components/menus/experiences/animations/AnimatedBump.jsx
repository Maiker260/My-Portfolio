import { motion as Motion } from "motion/react";

function AnimatedBump({
    changeContent,
    setChangeContent,
    component,
    children,
    className,
}) {
    const animations = {
        upperLeft: { x: ["0%", "-3%", "0%"] },
        lowerRight: { x: ["0%", "3%", "0%"] },
    };

    return (
        <Motion.div
            className={className}
            initial={{ x: "0%" }}
            animate={(changeContent && animations[component]) || { x: "0%" }}
            transition={{
                duration: 0.1,
                ease: [0.33, 1, 0.68, 1],
            }}
            onAnimationComplete={() => {
                if (changeContent) setChangeContent(null);
            }}
        >
            {children}
        </Motion.div>
    );
}

export default AnimatedBump;
