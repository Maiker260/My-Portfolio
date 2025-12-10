import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EducationList from "../components/menus/education/EducationList.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/education/animations/Intro.jsx";

function Education({ disableIntro }) {
    const location = useLocation();
    const [isTransition, setIsTransition] = useState(
        () => location.state?.cameFromTransition || disableIntro || false
    );

    useEffect(() => {
        if (isTransition) {
            setIsTransition(false);
        }
    }, [isTransition]);

    return (
        <div className="relative min-h-screen w-full max-w-[1920px] mx-auto p-3 overflow-hidden color-bg-details-third-gradient-top lg:p-0">
            {/* Big White Parallelogram */}
            <Intro
                start={{ y: "-50%" }}
                end={{ y: "0" }}
                className="hidden lg:block lg:absolute lg:-inset-[3%] lg:size-[107%]"
                isAnimationDisable={isTransition}
            >
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="size-full"
                >
                    <polygon points="1,19 59,0 79,100 11,100" fill="white" />
                </svg>
            </Intro>

            {/* Big Blue Parallelogram */}
            <Intro
                start={{ y: "50%" }}
                end={{ y: "0" }}
                delay={1}
                className={
                    "hidden lg:block lg:absolute lg:-inset-[1%] lg:size-[101%]"
                }
                isAnimationDisable={isTransition}
            >
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="size-full hidden lg:block"
                >
                    <polygon
                        points="0,20 60,0 80,100 10,100"
                        className="color-icons-tenth"
                    />
                    <text
                        x="5"
                        y="25"
                        fill="#FFF"
                        fontFamily="Rodin, sans-serif"
                        fontWeight="bold"
                        fontSize="7"
                        transform="rotate(-18 5 18)"
                        letterSpacing="-0.13em"
                        className="select-none"
                    >
                        EDUCATION
                    </text>
                </svg>
            </Intro>

            <main className="relative z-10 flex flex-col gap-15 items-center justify-center lg:min-h-screen">
                <Intro
                    start={{ y: "-10%" }}
                    end={{ y: "0" }}
                    delay={3}
                    className={
                        "size-full flex flex-col gap-4 lg:block lg:absolute lg:top-[27%] lg:left-[5%] lg:w-full lg:max-w-[60vw]"
                    }
                    isAnimationDisable={isTransition}
                >
                    <h1 className="text-4xl text-white font-rodin font-bold lg:hidden">
                        EDUCATION
                    </h1>
                    <EducationList />
                </Intro>

                {/* Back Button */}
                <Intro
                    start={{ x: "100%" }}
                    end={{ x: "0" }}
                    className={
                        "w-full pb-7 lg:pb-0 lg:w-auto lg:absolute lg:bottom-8 lg:right-3 lg:left-auto lg:translate-x-0 lg:z-50"
                    }
                    isAnimationDisable={isTransition}
                >
                    <NavigationSection
                        hasText
                        description={"Which Info do you want to view?"}
                        backTo={"/"}
                        parentSection={"Education"}
                    />
                </Intro>
            </main>
        </div>
    );
}

export default Education;
