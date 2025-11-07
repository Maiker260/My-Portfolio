import { useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../components/menus/skills/animations/Intro.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Header from "../components/menus/skills/Header.jsx";
import SkillCarousel from "../components/menus/skills/SkillCarousel.jsx";
import MiddleTitle from "../components/menus/skills/MiddleTitle.jsx";
import { creatorData } from "../services/data/creatorData.js";
import SkillCarouselPaging from "../components/menus/skills/SkillCarouselPaging.jsx";

function Skills({ disableIntro }) {
    const location = useLocation();
    const isTransition =
        location.state?.cameFromTransition || disableIntro || false;

    const skills = creatorData.skills;
    const [currentSkill, setCurrentSkill] = useState(skills[0]);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <main className="relative min-h-screen flex flex-col gap-5 overflow-hidden color-bg-details-third-gradient-top">
            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"mt-15 px-20 font-rodin"}
            >
                <Header />
            </Intro>
            <SkillCarousel
                currentSkill={currentSkill}
                setCurrentSkill={setCurrentSkill}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
            >
                <MiddleTitle currentSkill={currentSkill} />
            </Intro>

            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"h-[10vh] absolute bottom-8 left-20"}
            >
                <SkillCarouselPaging
                    skills={skills}
                    currentSkill={currentSkill}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                />
            </Intro>

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
