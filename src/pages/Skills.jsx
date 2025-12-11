import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SkillsOrbit from "../components/menus/skills/SkillsOrbit.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/skills/animations/Intro.jsx";
import { creatorData } from "../services/data/creatorData.js";
import Header from "../components/menus/skills/Header.jsx";
import SkillCarouselPaging from "../components/menus/skillsList/SkillCarouselPaging.jsx";

function Skills() {
    const navigate = useNavigate();
    const { id } = useParams();
    const allSkills = creatorData.skills;
    const skill = allSkills[id];
    const [skillSelected, setSkillSelected] = useState(skill.abilities[0]);
    const [isCardFlipping, setIsCardFlipping] = useState(false);
    const [changeContent, setChangeContent] = useState(false);

    const changeCurrentSkill = (i) => {
        navigate(`/skills/${i}`);
    };

    useEffect(() => {
        // Preload ability icons
        creatorData.skills.forEach((skill) => {
            skill.abilities.forEach((a) => {
                const img = new Image();
                img.src = a.img;
            });
        });

        // Preload card back image
        const back = new Image();
        back.src = "/other/card.webp";
    }, []);

    return (
        <main className="relative min-h-screen w-full max-w-[1920px] p-3 mx-auto flex flex-col gap-7 overflow-hidden color-bg-details-third-gradient-top lg:p-0 lg:gap-0">
            <Intro id={id} start={{ x: "-60%" }} end={{ x: "0" }}>
                <Header
                    skill={skill.name}
                    classname={"lg:absolute lg:top-14 lg:left-10"}
                />
            </Intro>
            <SkillsOrbit
                id={id}
                skill={skill}
                skillSelected={skillSelected}
                setSkillSelected={setSkillSelected}
                isCardFlipping={isCardFlipping}
                setIsCardFlipping={setIsCardFlipping}
                changeContent={changeContent}
                setChangeContent={setChangeContent}
            />

            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                className={
                    "relative mx-auto md:absolute md:bottom-12 md:left-13"
                }
            >
                <SkillCarouselPaging
                    skills={allSkills}
                    currentSkill={skill}
                    changeCurrentSkill={changeCurrentSkill}
                    isCardFlipping={isCardFlipping}
                    setSkillSelected={setSkillSelected}
                    setChangeContent={setChangeContent}
                />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={
                    "absolute bottom-8 w-full sm:w-auto sm:bottom-8 sm:right-3"
                }
            >
                <NavigationSection
                    hasText
                    description={"Select a Skill"}
                    hasHomeButton
                    backTo={"/skills"}
                    parentSection={"Skills"}
                />
            </Intro>
        </main>
    );
}

export default Skills;
