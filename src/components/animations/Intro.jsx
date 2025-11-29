import { motion as Motion } from "motion/react";

function Intro({ children, start, end, className }) {
    const animationClasses = className
        ? className
        : "relative flex flex-col items-center";

    return (
        <Motion.article
            initial={{ ...start, opacity: 0 }}
            animate={{ ...end, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
            }}
            className={animationClasses}
        >
            {children}
        </Motion.article>
    );
}

export default Intro;
