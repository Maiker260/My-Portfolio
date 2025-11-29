import { creatorData } from "../../../services/data/creatorData.js";

function MainTitle() {
    const { author } = creatorData;

    return (
        <div className="font-rodin border-2 border-black p-5 flex flex-col text-black -translate-y-1/10">
            <h2 className="text-3xl">{author.name}</h2>
            <h3 className="text-2xl">Job Position</h3>
        </div>
    );
}

export default MainTitle;
