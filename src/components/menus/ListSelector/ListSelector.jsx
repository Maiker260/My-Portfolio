import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import List from "./List.jsx";
import NavigationSection from "../NavigationSection.jsx";
import Intro from "./animations/Intro.jsx";

function ListSelector({ name, data, guideMessage, disableIntro }) {
    const location = useLocation();
    const [isTransition, setIsTransition] = useState(
        () => location.state?.cameFromTransition || disableIntro || false
    );

    useEffect(() => {
        if (isTransition) {
            setIsTransition(false);
        }
    }, [isTransition]);

    const titleName = name.toUpperCase();

    return (
        <main className="relative min-h-screen w-full max-w-[1920px] mx-auto overflow-hidden color-bg-details-third-gradient-top">
            {/* Diagonal White Line with Name */}
            <svg
                width="100%"
                height="100vh"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon
                    points="70 0, 100 0, 100 45, 65 100, 0 100, 0 97"
                    fill="#f3f1f2"
                />

                <text
                    x="110"
                    y="56.5"
                    textAnchor="end"
                    fill="currentColor"
                    transform="rotate(-57.5, 100, 70)"
                    className="text-[8px] color-text-details-fifth font-rodin tracking-[-0.1em] select-none"
                >
                    {titleName}
                </text>
            </svg>

            {/* List Info */}
            <List
                data={data}
                className={
                    "absolute top-[7%] left-[4%] h-[78%] w-[40vw] z-50 p-4 origin-top-left"
                }
                isAnimationDisable={isTransition}
            />
            <Intro
                start={{ x: "20%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
            >
                <NavigationSection
                    className={"absolute bottom-8 right-3"}
                    hasText
                    description={guideMessage}
                    backTo={"/"}
                    parentSection={name}
                />
            </Intro>
        </main>
    );
}

export default ListSelector;
