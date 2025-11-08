import { useState } from "react";
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
    const skill = creatorData.skills[id];
    const [currentSkillCard, setCurrentSkillCard] = useState("javascript");

    const changeCurrentSkill = (i) => {
        navigate(`/skills/${i}`);
    };

    return (
        <main className="relative min-h-screen flex flex-col overflow-hidden color-bg-details-third-gradient-top">
            <Intro start={{ x: "-60%" }} end={{ x: "0" }}>
                <Header
                    skill={skill.name}
                    classname={"absolute top-20 left-10"}
                />
            </Intro>
            <SkillsOrbit
                skill={skill}
                currentSkillCard={currentSkillCard}
                setCurrentSkillCard={setCurrentSkillCard}
            />

            <Intro
                start={{ x: "-60%" }}
                end={{ x: "0" }}
                className={"absolute bottom-8 left-13"}
            >
                <SkillCarouselPaging
                    skills={allSkills}
                    currentSkill={skill}
                    changeCurrentSkill={changeCurrentSkill}
                />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={"absolute bottom-8 right-3"}
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
