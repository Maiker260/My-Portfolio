import { creatorData } from "../../../services/data/creatorData.js";

function MainTitle() {
    const { author } = creatorData;

    return (
        <div className="flex flex-col p-3 text-black border-2 border-black font-rodin lg:p-5">
            <h2 className="text-3xl">{author.name}</h2>
            <h3 className="text-2xl">Job Position</h3>
        </div>
    );
}

export default MainTitle;
