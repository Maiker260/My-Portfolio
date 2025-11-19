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
        <main className="relative w-full min-h-screen overflow-hidden color-bg-details-third-gradient-top">
            <HorizontalBanner />

            <ProfilePicture />

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"absolute bottom-8 right-3"}
            >
                <NavigationSection backTo={"/"} parentSection={"AboutMe"} />
            </Intro>
        </main>
    );
}

export default AboutMe;
