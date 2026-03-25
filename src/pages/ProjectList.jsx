import ListSelector from "../components/menus/ListSelector/ListSelector.jsx";
import { creatorData } from "../services/data/creatorData.js";
import { useEffect } from "react";

function ProjectList({ disableIntro }) {
    const { projects } = creatorData;

    // Preload Images
    useEffect(() => {
        projects.forEach((project) => {
            project.screenshots?.forEach((img) => {
                const image = new Image();
                image.src = img.src;
            });
        });
    }, [projects]);

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
