import { motion as Motion } from "motion/react";

function Intro({
    children,
    className,
    delay = 0,
    start,
    end,
    isAnimationDisable,
}) {
    const animationClasses = className
        ? className
        : "relative flex flex-col items-center";

    return (
        <>
            <Motion.article
                initial={isAnimationDisable ? false : { ...start, opacity: 0 }}
                animate={isAnimationDisable ? false : { ...end, opacity: 1 }}
                transition={
                    isAnimationDisable
                        ? undefined
                        : {
                              duration: 0.4,
                              ease: [0.33, 1, 0.68, 1],
                              delay: delay * 0.1,
                          }
                }
                className={animationClasses}
                // className={`relative flex flex-col items-center ${className}`}
            >
                {children}
            </Motion.article>
        </>
    );
}

export default Intro;
