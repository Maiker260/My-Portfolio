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
        // NEED TO ADD THIS TO THE EXPERIENCE ITEM PAGE
        // <img
        //             src="/other/card.png"
        //             alt="card"
        //             className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[120%] w-full max-w-[10vw] shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
        //         />
    );
}

export default ExperienceList;
