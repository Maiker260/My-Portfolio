import { motion as Motion } from "motion/react";

function Intro({
    id = null,
    children,
    className,
    delay = 0,
    start,
    end,
    isAnimationDisable,
    tag = "article",
}) {
    const MotionTag = tag === "g" ? Motion.g : Motion.article;

    return (
        <MotionTag
            key={id}
            initial={isAnimationDisable ? false : start}
            animate={isAnimationDisable ? false : end}
            transition={
                isAnimationDisable
                    ? undefined
                    : {
                          duration: 0.6,
                          ease: [0.33, 1, 0.68, 1],
                          delay: delay * 0.1,
                      }
            }
            className={className ?? "relative flex flex-col items-center"}
        >
            {children}
        </MotionTag>
    );
}

export default Intro;
