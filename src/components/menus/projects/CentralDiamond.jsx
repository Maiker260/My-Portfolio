import { OpenInNew } from "../../icons/OpenInNew.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";

function CentralDiamond() {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    if (!project) return <p>Project not found</p>;

    const { screenshots } = project;

    return (
        <section className="absolute -top-22 -right-30 h-[120%] w-[70vw] flex items-center justify-center z-20">
            {/* External Diamond Container */}
            <div
                className="relative w-full h-full color-bg-details-third flex p-6"
                style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
            >
                {/* Internal Diamond 1 Container */}
                <div
                    className="relative w-full h-full color-bg-details-third-gradient flex items-center justify-center p-2"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                >
                    {/* Inner Diamond 2 container */}
                    <div
                        className="relative w-full h-full flex items-center justify-center overflow-hidden color-bg-details-secund"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                    >
                        <div
                            className="relative flex items-center justify-center overflow-hidden"
                            style={{
                                width: "75%",
                                height: "50%",
                                aspectRatio: "1 / 1",
                                clipPath:
                                    "polygon(19% 0%, 81% 0%, 101% 30%, 101% 70%, 81% 100%, 19% 100%, 0% 72%, 0% 28%)",
                            }}
                        >
                            {/* NEED TO CREATE A CARRUSEL TO SHOW ALL THE IMAGES */}
                            {screenshots.map((image) => (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ))}
                        </div>

                        {/* Banner */}
                        <div className="absolute bottom-[18%] left-[25%] w-[60%] h-[5%] color-bg-details-fifth-gradient z-50 -rotate-12 text-neutral-800 flex justify-center items-center">
                            <OpenInNew className="absolute -top-[70%] left-[48%] w-12 fill-[#65dcfb] bg-black rounded-full p-1 border border-[#65dcfb] cursor-pointer hover:fill-amber-300" />
                            <span
                                className="font-rodin text-5xl relative z-20"
                                style={{
                                    textShadow: `
                                        2px 2px 0 #65dcfb,
                                        -2px 2px 0 #65dcfb,
                                        2px -2px 0 #65dcfb,
                                        -2px -2px 0 #65dcfb
                                    `,
                                }}
                            >
                                MORE INFO
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CentralDiamond;
