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
    const { projects } = creatorData;

    return (
        <ProjectDataContext.Provider value={projects}>
            <main className="relative min-h-screen w-full max-w-[1920px] mx-auto color-bg-details-third-gradient-top overflow-hidden">
                {/* Layout */}
                <DiagonalBottomBox />

                <DiagonalTopBox />

                {/* Upper Left Info */}
                <Intro
                    start={{ y: "-100%" }}
                    end={{ y: "0" }}
                    className={
                        "absolute origin-top-left top-[6vh] left-[5vw] z-50"
                    }
                >
                    <TextTop
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                {/* Diamond Image Carousel */}
                <Intro
                    start={{ x: "50%" }}
                    end={{ x: "0" }}
                    className="absolute -top-22 -right-30 h-[120%] w-[70vw] flex items-center justify-center z-40"
                >
                    <CentralDiamond
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                {/* Skill Info Box */}
                <Intro
                    start={{ y: "150%" }}
                    end={{ y: "0" }}
                    className="absolute top-[55%] left-0 h-[30vh] w-[45vw] z-50"
                >
                    <SkillDetailsBox
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                {/* Back Button */}
                <Intro
                    start={{ x: "20%" }}
                    end={{ x: "0" }}
                    className={"absolute bottom-8 right-3 z-50"}
                >
                    <NavigationSection backTo={"/projects"} hasHomeButton />
                </Intro>
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
