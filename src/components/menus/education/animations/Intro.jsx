import { motion as Motion } from "motion/react";

function Intro({
    children,
    className,
    delay = 0,
    start,
    duration,
    end,
    isAnimationDisable,
}) {
    const animationClasses = className
        ? className
        : "relative flex flex-col items-center";

    return (
        <>
            <Motion.div
                initial={isAnimationDisable ? false : { ...start, opacity: 0 }}
                animate={isAnimationDisable ? false : { ...end, opacity: 1 }}
                transition={
                    isAnimationDisable
                        ? undefined
                        : {
                              duration: duration || 0.5,
                              ease: [0.33, 1, 0.68, 1],
                              delay: delay * 0.1,
                          }
                }
                className={animationClasses}
            >
                {children}
            </Motion.div>
        </>
    );
}

export default Intro;
