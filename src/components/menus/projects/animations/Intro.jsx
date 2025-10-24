import { motion as Motion } from "motion/react";

function Intro({ children, start, end }) {
    return (
        <Motion.div
            initial={{ ...start, opacity: 0 }}
            animate={{ ...end, opacity: 1 }}
            transition={{
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1],
            }}
            className={`relative flex flex-col items-center`}
        >
            {children}
        </Motion.div>
    );
}

export default Intro;
