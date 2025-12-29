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

    const isMobile = window.innerWidth < 1024 ? true : false;

    return (
        <main className="relative min-h-screen w-full max-w-[1920px] 2xl:max-w-[2200px] 3xl:max-w-[2560px] flex flex-col mx-auto overflow-hidden color-bg-details-third-gradient-top">
            {/* Profile Picture */}
            <Intro
                start={{ y: "-150%" }}
                end={{ y: "0" }}
                delay={0.4}
                className="relative flex flex-col items-center lg:absolute lg:-inset-0 size-full lg:z-10"
                isAnimationDisable={isTransition}
            >
                <ProfilePicture isAnimationDisable={isTransition} />
            </Intro>

            {/* Banner */}
            <Intro
                start={{ y: "100%" }}
                end={{ y: "0" }}
                className={
                    "relative lg:absolute lg:top-[42%] lg:left-[20%] lg:w-full 2xl:left-[21%] 3xl:left-[23%]"
                }
                isAnimationDisable={isTransition}
            >
                <HorizontalBanner />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={
                    "absolute bottom-8 w-full z-50 sm:w-auto sm:bottom-8 sm:right-3"
                }
            >
                <NavigationSection
                    backTo={"/"}
                    parentSection={"AboutMe"}
                    hasBlackButton={isMobile}
                />
            </Intro>
        </main>
    );
}

export default AboutMe;
