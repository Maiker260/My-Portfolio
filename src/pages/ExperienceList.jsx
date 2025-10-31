import ListSelector from "../components/menus/ListSelector/ListSelector.jsx";
import { creatorData } from "../services/data/creatorData.js";

function ExperienceList({ disableIntro }) {
    const experience = creatorData.experience;

    return (
        <ListSelector
            name={"Experience"}
            data={experience}
            guideMessage={"Which Job do you want to view?"}
            hasCard={true}
            disableIntro={disableIntro}
        />
    );
}

export default ExperienceList;
