import { creatorData } from "../../../services/data/creatorData.js";

function ProfilePicture() {
    const { author } = creatorData;

    return (
        <div className="size-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Line Behind Profile Picture */}
                <polygon
                    points="20,0 48,0 46,18 48,52 30,100 0,100 0,53 9,11"
                    fill="black"
                    opacity={"0.3"}
                />

                {/* Profile Picture */}
                <polygon
                    points="20,0 47,0 45,18 47,52 29,100 0,100 0,53 9,11"
                    fill="#505972"
                />
            </svg>

            {/* Profile Picture */}
            <div className="rounded-full">
                <img
                    src={author.profilePicture}
                    className="absolute top-[4%] left-[9%] w-[30vw] h-[60vh] object-contain rounded-full"
                    draggable={false}
                    alt="Profile Avatar"
                />
            </div>

            {/* Upper Left Name */}
            <div className="flex flex-col w-[33vw] absolute top-24 -left-3 z-50 font-skipstdb -rotate-7">
                <span className="self-end mr-15 text-white text-[1.7vw] select-none">
                    {author.name}
                </span>
                <div className="h-1 flex justify-center items-center overflow-hidden bg-white"></div>
            </div>

            {/* Lower Left Info */}
            <div className="absolute bottom-15 -left-1 flex flex-col gap-7 z-50 font-skipstdb">
                <div className="flex flex-col w-[12vw] left-0 -rotate-7">
                    <span className="self-end mr-5 text-black text-[1.2vw] select-none">
                        Currently
                    </span>
                    <div className="h-1 flex justify-center items-center overflow-hidden bg-black"></div>
                </div>
                <ul className="flex flex-col gap-5 list-disc w-[25vw] ml-25 text-white">
                    {author.workingOn.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePicture;
