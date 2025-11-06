import { useLocation } from "react-router-dom";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/skills/animations/Intro.jsx";
import Header from "../components/menus/skills/Header.jsx";
import SkillCarousel from "../components/menus/skills/SkillCarousel.jsx";

function Skills({ disableIntro }) {
    const location = useLocation();
    const isTransition =
        location.state?.cameFromTransition || disableIntro || false;

    return (
        <main className="relative min-h-screen flex flex-col gap-5 overflow-hidden color-bg-details-third-gradient-top">
            <Header />
            <SkillCarousel />
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"absolute bottom-8 right-3"}
            >
                <NavigationSection
                    hasText
                    description={"Select a Skill Card"}
                    backTo={"/"}
                    parentSection={"Skills"}
                />
            </Intro>
        </main>
    );
}

export default Skills;
