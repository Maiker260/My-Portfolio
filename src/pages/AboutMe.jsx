import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../components/menus/about-me/animations/Intro.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import HorizontalBanner from "../components/menus/about-me/HorizontalBanner.jsx";
import ProfilePicture from "../components/menus/about-me/ProfilePicture.jsx";

function AboutMe({ disableIntro }) {
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
        <main className="relative min-h-screen w-full max-w-[1920px] flex flex-col mx-auto overflow-hidden color-bg-details-third-gradient-top">
            {/* Profile Picture */}
            <Intro
                start={{ y: "-150%" }}
                end={{ y: "0" }}
                delay={0.4}
                className="relative flex flex-col items-center lg:absolute lg:-inset-0 size-full lg:z-10"
                // className="absolute -inset-0 size-full z-10"
                isAnimationDisable={isTransition}
            >
                <ProfilePicture isAnimationDisable={isTransition} />
            </Intro>

            {/* Banner */}
            <Intro
                start={{ y: "100%" }}
                end={{ y: "0" }}
                className={
                    "hidden lg:block lg:absolute lg:-inset-0 lg:size-full"
                }
                // className="absolute -inset-0 size-full"
                isAnimationDisable={isTransition}
            >
                <HorizontalBanner />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={
                    "absolute bottom-8 w-full sm:w-auto sm:bottom-8 sm:right-3"
                }
                // className={"absolute bottom-8 right-3"}
            >
                <NavigationSection backTo={"/"} parentSection={"AboutMe"} />
            </Intro>
        </main>
    );
}

export default AboutMe;
