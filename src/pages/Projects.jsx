import { useState } from "react";
import { ProjectDataContext } from "../context/ProjectDataContext.jsx";
import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";
import TextTop from "../components/menus/projects/TextTop.jsx";
import { creatorData } from "../services/data/creatorData.js";

function Projects() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [buttonPressed, setButtonPressed] = useState(null);
    const projects = creatorData.projects;

    return (
        <ProjectDataContext.Provider value={projects}>
            <main className="relative min-h-screen color-bg-details-third overflow-hidden">
                <DiagonalTopBox />
                <TextTop
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                />
                <DiagonalBottomBox />
                <CentralDiamond
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                />
                <SkillDetailsBox
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                    buttonPressed={buttonPressed}
                    setButtonPressed={setButtonPressed}
                />
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
