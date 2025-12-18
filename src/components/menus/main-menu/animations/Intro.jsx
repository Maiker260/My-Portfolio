import { motion as Motion } from "motion/react";

function Intro({
    showContent,
    component: Children,
    cameFromTransition,
    className,
    translateY,
    ...rest
}) {
    const childrenClasses = className
        ? className
        : "relative flex flex-col items-center";

    if (cameFromTransition) {
        return (
            <Children
                showContent={showContent}
                isAnimationDisable={cameFromTransition}
                {...rest}
            />
        );
    }

    return (
        /* Bouncing Effect when loading the List */
        <Motion.div
            initial={{ y: "-20%", opacity: 0 }}
            animate={
                showContent ? { y: "0%", opacity: 1 } : { y: "0%", opacity: 0 }
            }
            transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
            }}
            className={childrenClasses}
        >
            <Children showContent={showContent} {...rest} />
        </Motion.div>
    );
}

export default Intro;
