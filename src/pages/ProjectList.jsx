import ListSelector from "../components/menus/ListSelector/ListSelector.jsx";
import { creatorData } from "../services/data/creatorData.js";

function ProjectList({ disableIntro }) {
    const projects = creatorData.projects;

    return (
        <ListSelector
            name={"Projects"}
            data={projects}
            disableIntro={disableIntro}
            guideMessage={"Which Project do you want to view?"}
        />
    );
}

export default ProjectList;
