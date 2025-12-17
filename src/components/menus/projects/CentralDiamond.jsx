import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";
import ImageCarousel from "../../layout/ImageCarousel.jsx";

function CentralDiamond({ buttonPressed, setButtonPressed }) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    const { screenshots, livePreviewURL } = project;

    return (
        <section className="size-full">
            {/* External Diamond Container */}
            <div
                className="relative size-full color-bg-details-third flex p-6"
                style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
            >
                {/* Internal Diamond 1 Container */}
                <div
                    className="relative size-full color-bg-details-third-gradient flex items-center justify-center p-2"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                >
                    {/* Inner Diamond 2 container */}
                    <div
                        className="relative size-full flex items-center justify-center overflow-hidden color-bg-details-secund"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                    >
                        <div
                            className="relative w-[75%] h-[50%] aspect-square flex items-center justify-center overflow-hidden"
                            style={{
                                clipPath:
                                    "polygon(19% 0%, 81% 0%, 101% 30%, 101% 70%, 81% 100%, 19% 100%, 0% 72%, 0% 28%)",
                            }}
                        >
                            <ImageCarousel
                                screenshots={screenshots}
                                buttonPressed={buttonPressed}
                                setButtonPressed={setButtonPressed}
                            />
                        </div>

                        {/* Bottom Banner */}
                        <Link
                            to={livePreviewURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-[18%] left-[25%] w-[60%] h-[5%] color-bg-details-fifth-gradient z-50 -rotate-12  flex justify-center items-center group"
                        >
                            <OpenInNew className="absolute -top-[70%] left-[48%] w-12 fill-icons bg-black rounded-full p-1 border border-main cursor-pointer group-hover:fill-select-icons" />
                            <span className="font-rodin text-[3vw] relative z-20 text-neutral-800 text-shadow-main group-hover:color-text-details-third group-hover:text-shadow-secund group-hover:cursor-pointer">
                                LIVE DEMO
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CentralDiamond;
