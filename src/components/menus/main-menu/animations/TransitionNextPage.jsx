import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";

import { AbstractForm } from "../../../icons/AbstractForm.jsx";

function TransitionNextPage({ NextPage, nextUrl }) {
    const navigate = useNavigate();

    const [secondTransition, setSecondTransition] = useState(false);

    useEffect(() => {
        // secondTransition starts after 80ms
        const showTimer = setTimeout(() => {
            setSecondTransition(true);

            // navigation starts 700ms after animation begins
            const navTimer = setTimeout(() => {
                if (nextUrl)
                    navigate(nextUrl, { state: { cameFromTransition: true } });
            }, 700);

            return () => clearTimeout(navTimer);
        }, 80);

        return () => clearTimeout(showTimer);
    }, [secondTransition, nextUrl, navigate]);

    return (
        <div className="fixed w-full max-w-[1920px] 2xl:max-w-[2200px] 3xl:max-w-[2560px] mx-auto inset-0 z-[9999] pointer-events-none overflow-hidden">
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
                <Motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        maskImage: "url(/other/abstract-form.svg)",
                        WebkitMaskImage: "url(/other/abstract-form.svg)",
                        maskRepeat: "no-repeat",
                        maskPosition: "40% 40%",

                        animation:
                            "transitionNextPage 0.8s forwards ease-in-out",
                    }}
                >
                    <div className="size-full">
                        <NextPage />
                    </div>
                </Motion.div>
            )}
        </div>
    );
}

export default TransitionNextPage;
