import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainPageContext } from "../context/mainPageContext.jsx";
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
        <main className="relative min-h-screen flex flex-col gap-5 overflow-hidden color-bg-details-third-gradient-top">
            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                isAnimationDisable={isTransition}
                className={"mt-15 px-20 font-rodin"}
            >
                <Header />
            </Intro>
            {/* NEED TO ADD AN ANIMATION TO THE CAROUSEL */}
            <SkillCarousel
                currentSkill={currentSkill}
                setCurrentSkill={setCurrentSkill}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                setSkillSelectedData={setSkillSelectedData}
            />
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
