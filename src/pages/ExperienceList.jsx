import { useEffect } from "react";
import ListSelector from "../components/menus/ListSelector/ListSelector.jsx";
import { creatorData } from "../services/data/creatorData.js";

function ExperienceList({ disableIntro }) {
    const { experiences } = creatorData;

    // Preload Images
    useEffect(() => {
        experiences.forEach((exp) => {
            const img = new Image();
            img.src = exp.logo;
        });

        const back = new Image();
        back.src = "/other/card.webp";
    }, [experiences]);

    return (
        <ListSelector
            name={"Experience"}
            data={experiences}
            guideMessage={"Which Job do you want to view?"}
            hasCard={true}
            disableIntro={disableIntro}
        />
    );
}

export default ExperienceList;
