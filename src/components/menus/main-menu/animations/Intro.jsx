import { motion as Motion } from "motion/react";

function Intro({
    showContent,
    component: Children,
    cameFromTransition,
    ...rest
}) {
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
                showContent ? { y: "10%", opacity: 1 } : { y: "0", opacity: 0 }
            }
            transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
            }}
            className={`relative flex flex-col items-center`}
        >
            <Children showContent={showContent} {...rest} />
        </Motion.div>
    );
}

export default Intro;
