import { motion as Motion } from "motion/react";

function Intro({ children, className, delay = 0, start, end }) {
    return (
        <Motion.div
            initial={{ ...start, opacity: 0 }}
            animate={{ ...end, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: delay * 0.1,
            }}
            className={`relative flex flex-col items-center ${className}`}
        >
            {children}
        </Motion.div>
    );
}

export default Intro;
