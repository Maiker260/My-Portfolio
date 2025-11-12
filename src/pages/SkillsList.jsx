import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainPageContext } from "../context/MainPageContext.jsx";
import Intro from "../components/menus/skillsList/animations/Intro.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Header from "../components/menus/skillsList/Header.jsx";
import SkillCarousel from "../components/menus/skillsList/SkillCarousel.jsx";
import MiddleTitle from "../components/menus/skillsList/MiddleTitle.jsx";
import { creatorData } from "../services/data/creatorData.js";
import SkillCarouselPaging from "../components/menus/skillsList/SkillCarouselPaging.jsx";

function SkillsList({ disableIntro }) {
    const location = useLocation();
    const [isTransition, setIsTransition] = useState(
        () => location.state?.cameFromTransition || disableIntro || false
    );

    const { setSkillSelectedData, skillSelectedData } =
        useContext(MainPageContext);

    useEffect(() => {
        if (isTransition) {
            setIsTransition(false);
        }
    }, [isTransition]);

    const skills = creatorData.skills;

    const [currentSkill, setCurrentSkill] = useState(
        skillSelectedData || skills[0]
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <main className="relative min-h-screen flex flex-col overflow-hidden color-bg-details-third-gradient-top">
            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"mt-15 px-10 font-rodin"}
            >
                <Header />
            </Intro>
            <Intro
                start={{ opacity: 0, scale: 0.5 }}
                end={{ opacity: 1, scale: 1 }}
                delay={0.5}
                isAnimationDisable={isTransition}
                className="flex justify-center items-center"
            >
                <SkillCarousel
                    currentSkill={currentSkill}
                    setCurrentSkill={setCurrentSkill}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    setSkillSelectedData={setSkillSelectedData}
                />
            </Intro>
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
            >
                <MiddleTitle
                    currentSkill={currentSkill}
                    isAnimationDisable={isTransition}
                />
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

export default SkillsList;
