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
        <main className="relative min-h-screen overflow-hidden color-bg-details-third-gradient-top">
            <div
                className="relative min-h-screen overflow-hidden color-bg-details-third"
                style={{
                    clipPath:
                        "polygon(70% 0, 100% 0, 100% 45%, 65% 100%, 0 100%, 0 97%)",
                }}
            >
                <h2
                    className={`color-text-details-fifth font-rodin tracking-[-0.1em] ${
                        name === "Experience" ? "text-8xl" : "text-9xl"
                    } absolute bottom-[30%] right-0 -rotate-42 select-none`}
                >
                    {titleName}
                </h2>
            </div>
            <List
                name={name}
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
