import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectDataContext } from "../context/ProjectDataContext.jsx";
import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";
import TextTop from "../components/menus/projects/TextTop.jsx";
import { creatorData } from "../services/data/creatorData.js";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/projects/animations/Intro.jsx";
import ImageCarouselMobile from "../components/menus/projects/ImageCarouselMobile.jsx";
import NotFound from "./NotFound.jsx";

function Projects() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [buttonPressed, setButtonPressed] = useState(null);
    const { projects } = creatorData;

    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return <NotFound />;
    }

    return (
        <ProjectDataContext.Provider value={projects}>
            <main className="relative min-h-screen w-full max-w-[1920px] 2xl:max-w-[2200px] 3xl:max-w-[2560px] flex flex-col gap-10 mx-auto p-4 pb-50 color-bg-details-third-gradient-top overflow-x-hidden lg:overflow-hidden lg:gap-0 xl:p-0">
                {/* Layout */}
                <div className="hidden lg:block">
                    <DiagonalBottomBox />
                </div>

                <div className="hidden lg:block">
                    <DiagonalTopBox />
                </div>

                {/* Upper Left Info */}
                <Intro
                    start={{ y: "-100%" }}
                    end={{ y: "0" }}
                    className={
                        "relative w-fit mx-auto lg:absolute lg:origin-top-left lg:z-50 lg:top-[8%] lg:left-[2vw] xl:top-[6%] 2xl:top-[8%]"
                    }
                >
                    <TextTop
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                {/* Diamond Image Carousel (Desktop Mode) */}
                <Intro
                    start={{ x: "50%" }}
                    end={{ x: "0" }}
                    className="hidden lg:flex lg:items-center lg:justify-center lg:absolute lg:-top-22 lg:-right-30 lg:h-[120%] lg:w-[70vw] lg:z-40"
                >
                    <CentralDiamond
                        buttonPressed={buttonPressed}
                        setButtonPressed={setButtonPressed}
                    />
                </Intro>

                {/* Image Carousel (Mobile Only)  */}
                <Intro
                    start={{ x: "50%" }}
                    end={{ x: "0" }}
                    className={
                        "relative w-full h-[30vh] mx-auto sm:max-w-[50vw] lg:hidden"
                    }
                >
                    <ImageCarouselMobile />
                </Intro>

                {/* Skill Info Box */}
                <Intro
                    start={{ y: "150%" }}
                    end={{ y: "0" }}
                    className="w-full h-[30vh] mx-auto sm:max-w-[70vw] lg:absolute lg:top-[55%] lg:left-0 lg:h-[30vh] lg:w-[45vw] lg:z-50"
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
                    className={
                        "absolute bottom-8 w-full sm:w-auto sm:bottom-8 sm:right-3 lg:z-50"
                    }
                >
                    <NavigationSection
                        backTo={"/projects"}
                        hasHomeButton
                        hasArrows
                    />
                </Intro>
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
