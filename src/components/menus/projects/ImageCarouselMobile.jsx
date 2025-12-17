import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectDataContext } from "../../../context/ProjectDataContext.jsx";
import ImageCarousel from "../../layout/ImageCarousel.jsx";
import { OpenInNew } from "../../icons/OpenInNew.jsx";

function ImageCarouselMobile({ buttonPressed, setButtonPressed }) {
    const { id } = useParams();
    const projectData = useContext(ProjectDataContext);
    const project = projectData[Number(id)];

    const { screenshots, livePreviewURL } = project;

    return (
        <section className="size-full flex flex-col gap-2">
            <ImageCarousel
                screenshots={screenshots}
                buttonPressed={buttonPressed}
                setButtonPressed={setButtonPressed}
                className={""}
            />

            {/* Bottom Banner */}
            <Link
                to={livePreviewURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 w-fit p-1 mx-auto rounded color-bg-details-fifth"
            >
                <span className="font-rodin relative z-20 text-neutral-800">
                    LIVE DEMO
                </span>
                <OpenInNew className={"w-4"} />
            </Link>
        </section>
    );
}

export default ImageCarouselMobile;
