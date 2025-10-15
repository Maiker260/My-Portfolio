import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";
import { ProjectDataContext } from "../context/ProjectDataContext";
import { testProjectData } from "../services/data/Projects.jsx";

function Projects() {
    return (
        <ProjectDataContext.Provider value={testProjectData}>
            <main className="relative min-h-screen color-bg-details-third overflow-hidden">
                <DiagonalTopBox />
                <DiagonalBottomBox />
                <CentralDiamond />
                <SkillDetailsBox />
            </main>
        </ProjectDataContext.Provider>
    );
}

export default Projects;
