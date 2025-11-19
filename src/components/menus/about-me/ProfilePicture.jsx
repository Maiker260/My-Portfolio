import { creatorData } from "../../../services/data/creatorData.js";

function ProfilePicture() {
    const { author } = creatorData;

    return (
        <div className="w-full h-full">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
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

                <clipPath id="avatar-clip">
                    <polygon points="20,0 47,0 45,18 47,52 29,100 0,100 0,53 9,11" />
                </clipPath>

                {/* <image
                    href={author.profilePicture}
                    x="-20"
                    y="-20"
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#avatar-clip)"
                /> */}
            </svg>

            {/* Upper Left Name */}
            <div className="flex flex-col w-[33vw] absolute top-24 -left-3 z-50 font-skipstdb -rotate-7">
                <span className="self-end mr-15 text-white text-[1.7vw] select-none">
                    {author.name}
                </span>
                <div className="h-1 flex justify-center items-center overflow-hidden bg-white"></div>
            </div>
        </div>
    );
}

export default ProfilePicture;
