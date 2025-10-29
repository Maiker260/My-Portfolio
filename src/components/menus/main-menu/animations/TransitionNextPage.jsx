import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";

import { AbstractForm } from "../../../icons/AbstractForm.jsx";

function TransitionNextPage({ NextPage, nextUrl }) {
    const navigate = useNavigate();

    const [secondTransition, setSecondTransition] = useState(false);

    useEffect(() => {
        // Delay to show the second animation
        const delay = 100;
        const timer = setTimeout(() => setSecondTransition(true), delay);
        return () => clearTimeout(timer);
    }, []);

    const handleSecondTransition = () => {
        // NEED TO SHOW THE LIST ANIMATION ONLY ONCE WHEN CHANGING PAGE
        if (nextUrl) navigate(nextUrl, { state: { cameFromTransition: true } });
    };

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {/* First Transition */}
            <Motion.div
                initial={{ scale: 10, opacity: 0 }}
                animate={{ scale: 500, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="absolute w-2.5 h-2.5 top-[40%] left-[40%]"
            >
                <AbstractForm fillColor="#0517c4B3" />
            </Motion.div>

            {/* Second Transition */}
            {secondTransition && (
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        maskImage: "url(/other/abstract-form.svg)",
                        WebkitMaskImage: "url(/other/abstract-form.svg)",

                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "40% 40%",
                        WebkitMaskPosition: "40% 40%",
                        animation:
                            "transitionNextPage 0.8s forwards ease-in-out",
                    }}
                    onAnimationEnd={handleSecondTransition}
                >
                    <div className="w-full h-full">
                        <NextPage />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TransitionNextPage;
