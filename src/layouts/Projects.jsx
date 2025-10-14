import DiagonalTopBox from "../components/menus/projects/DiagonalTopBox.jsx";
import DiagonalBottomBox from "../components/menus/projects/DiagonalBottomBox.jsx";
import CentralDiamond from "../components/menus/projects/CentralDiamond.jsx";
import SkillDetailsBox from "../components/menus/projects/SkillDetailsBox.jsx";

function Projects() {
    return (
        <main className="relative min-h-screen color-bg-details-third overflow-hidden">
            <DiagonalTopBox />
            <DiagonalBottomBox />
            <CentralDiamond />
            <SkillDetailsBox />
        </main>
    );
}

export default Projects;
