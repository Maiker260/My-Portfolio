import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EducationList from "../components/menus/education/EducationList.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/education/animations/Intro.jsx";

// NEED TO CREATE AN INTRO ANIMATION
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
        <div className="relative min-h-screen w-full max-w-[1920px] mx-auto overflow-hidden color-bg-details-third-gradient-top">
            {/* Big White Parallelogram */}
            <Intro
                start={{ y: "-50%" }}
                end={{ y: "0" }}
                className="absolute -inset-[3%] size-[107%]"
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
                className={"absolute -inset-[1%] size-[101%]"}
                isAnimationDisable={isTransition}
            >
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="size-full"
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

            <main className="relative z-10 min-h-screen flex items-center justify-center">
                <Intro
                    start={{ y: "-10%" }}
                    end={{ y: "0" }}
                    delay={3}
                    className={
                        "absolute top-[27%] left-[5%] w-full max-w-[60vw]"
                    }
                    isAnimationDisable={isTransition}
                >
                    <EducationList />
                </Intro>

                {/* Back Button */}
                <Intro
                    start={{ x: "100%" }}
                    end={{ x: "0" }}
                    className={"absolute bottom-8 right-3 z-50"}
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
