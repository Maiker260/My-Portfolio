import { useState } from "react";
import { ProjectDataContext } from "../context/ProjectDataContext.jsx";
import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";
import TextTop from "../components/menus/projects/TextTop.jsx";
import { creatorData } from "../services/data/creatorData.js";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/projects/animations/Intro.jsx";

function Projects() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [buttonPressed, setButtonPressed] = useState(null);
    const projects = creatorData.projects;

    return (
        <ProjectDataContext.Provider value={projects}>
            <main className="relative min-h-screen color-bg-details-third overflow-hidden">
                <DiagonalTopBox />

                <Intro
                    start={{ y: "-100%" }}
                    end={{ y: "0" }}
                    className={
                        "absolute origin-top-left top-[10vh] left-[5%] h-[35%]"
                    }
                >
                    <TextTop
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                <DiagonalBottomBox />
                <CentralDiamond
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                />

                <Intro
                    start={{ y: "150%" }}
                    end={{ y: "0" }}
                    className="absolute top-[55%] left-0 h-[30%] w-[45vw] z-50"
                >
                    <SkillDetailsBox
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                <Intro start={{ x: "20%" }} end={{ x: "0" }}>
                    <NavigationSection
                        className={"absolute bottom-8 right-3 z-50"}
                        hasBlackButton
                        hasHomeButton
                        backTo={"/projects"}
                    />
                </Intro>
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
