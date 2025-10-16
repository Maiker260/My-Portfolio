import { useState } from "react";
import { ProjectDataContext } from "../context/ProjectDataContext";
import { testProjectData } from "../services/data/Projects.jsx";
import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";

function Projects() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <ProjectDataContext.Provider value={testProjectData}>
            <main className="relative min-h-screen color-bg-details-third overflow-hidden">
                <DiagonalTopBox
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                />
                <DiagonalBottomBox />
                <CentralDiamond />
                <SkillDetailsBox
                    hoveredSkill={hoveredSkill}
                    setHoveredSkill={setHoveredSkill}
                />
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
