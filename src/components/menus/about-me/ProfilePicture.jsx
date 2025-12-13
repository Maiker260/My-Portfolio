import { creatorData } from "../../../services/data/creatorData.js";

function ProfilePicture() {
    const { author } = creatorData;

    return (
        <div className="w-full flex flex-col gap-5 pt-5 mx-auto bg-[#505972] lg:block lg:size-full lg:bg-transparent lg:p-0">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="hidden lg:block"
            >
                {/* Shadow Behind Profile Picture Banner */}
                <polygon
                    points="20,0 48,0 46,18 48,52 30,100 0,100 0,53 9,11"
                    fill="black"
                    opacity={"0.3"}
                />

                {/* Profile Picture Banner */}
                <polygon
                    points="20,0 47,0 45,18 47,52 29,100 0,100 0,53 9,11"
                    fill="#505972"
                />
            </svg>

            {/* Upper Left Name */}
            <div className="w-full m-auto">
                <div className="relative flex flex-col top-5 -left-[20%] w-[80%] -rotate-7 z-50 font-skipstdb sm:w-[100%] sm:top-10 sm:-left-90 sm:m-auto lg:absolute lg:top-30 lg:-left-2 lg:w-[33vw] lg:m-0">
                    {/* <div className="flex flex-col w-[33vw] absolute top-24 -left-3 z-50 font-skipstdb -rotate-7"> */}
                    <span className="self-end text-xl mr-5 text-white select-none sm:mr-15 lg:text-[1.7vw]">
                        {author.name}
                    </span>
                    <div className="h-1 flex justify-center items-center overflow-hidden bg-white"></div>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="rounded-full mx-auto">
                <img
                    src={author.profilePicture}
                    className="relative w-full h-[30vh] object-contain rounded-full select-none lg:absolute lg:bottom-[42%] lg:left-[9%] lg:w-[30vw] lg:h-[40vh]"
                    draggable={false}
                    alt="Profile Avatar"
                />
            </div>

            {/* Lower Left Info */}
            <div className="relative w-fit flex flex-col gap-5 m-auto z-50 font-skipstdb lg:absolute lg:bottom-15 lg:-left-1 lg:m-0">
                <div className="relative flex flex-col w-[80%] -left-[42%] -rotate-7 sm:w-[100%] sm:-left-120 lg:static lg:w-[13vw] lg:left-0">
                    <span className="self-end mr-5 text-base text-neutral-900 select-none lg:text-[1.2vw]">
                        Currently
                    </span>
                    <div className="h-1 flex justify-center items-center overflow-hidden bg-black"></div>
                </div>
                <ul className="w-full flex flex-col gap-5 px-8 pb-6 list-disc text-sm text-white sm:text-base lg:w-[25vw] lg:p-0 lg:ml-25">
                    {author.workingOn.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePicture;
