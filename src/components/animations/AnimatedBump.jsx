import { motion as Motion } from "motion/react";

function AnimatedBump({
    buttonPressed,
    setButtonPressed,
    children,
    className,
}) {
    const animations = {
        prev: { x: ["0%", "-3%", "0%"] },
        next: { x: ["0%", "3%", "0%"] },
    };

    return (
        <Motion.div
            className={className}
            initial={{ x: "0%" }}
            animate={animations[buttonPressed] || { x: "0%" }}
            transition={{
                duration: 0.1,
                ease: [0.33, 1, 0.68, 1],
            }}
            onAnimationComplete={() => {
                if (buttonPressed) setButtonPressed(null);
            }}
        >
            {children}
        </Motion.div>
    );
}

export default AnimatedBump;
