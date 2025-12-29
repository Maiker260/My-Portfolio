import { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/experiences/animations/Intro.jsx";
import JobTitleInfo from "../components/menus/experiences/JobTitleInfo.jsx";
import JobDescription from "../components/menus/experiences/JobDescription.jsx";
import CardFlip from "../components/layout/CardFlip.jsx";
import { creatorData } from "../services/data/creatorData.js";
import JobResponsabilities from "../components/menus/experiences/JobResponsabilities.jsx";

function Experiences() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [changeContent, setChangeContent] = useState(false);

    const { id } = useParams();
    const { experiences } = creatorData;
    const totalExperiences = experiences.length;
    const job = experiences[id];

    return (
        <main className="flex flex-col gap-10 relative min-h-screen w-full max-w-[1920px] 2xl:max-w-[2200px] 3xl:max-w-[2560px] p-4 mx-auto overflow-hidden color-bg-details-third-gradient-top font-rodin lg:gap-0 lg:p-0">
            {/* White Background Line */}
            <Intro
                start={{ x: "-5%", scale: 1.1 }}
                end={{ x: "0", scale: 1 }}
                className="hidden lg:block absolute inset-0 size-full obverflow-hidden"
            >
                <svg
                    className="size-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon
                        points="100 0, 100 80, 85 100, 20 100, 94 7"
                        fill="#f3f1f2"
                    />
                </svg>
            </Intro>

            {/* Job Title-Info */}
            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                className={
                    "relative lg:absolute lg:top-5 lg:left-0 lg:h-[25vh] lg:w-[40vw]"
                }
            >
                <JobTitleInfo
                    id={id}
                    data={experiences}
                    totalExperiences={totalExperiences}
                    setButtonPressed={setButtonPressed}
                    changeContent={changeContent}
                    setChangeContent={setChangeContent}
                    setIsFlipping={setIsFlipping}
                    isFlipping={isFlipping}
                />
            </Intro>

            {/* Middle Card */}
            <Intro
                start={{ scale: 0, opacity: 0 }}
                end={{ scale: 1, opacity: 1 }}
                className="w-60 h-85 m-auto rounded-xl lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-[15%] lg:-translate-y-[70%] lg:rotate-10 lg:w-3xs lg:h-96"
            >
                <CardFlip
                    id={id}
                    data={experiences}
                    isFlipping={isFlipping}
                    buttonPressed={buttonPressed}
                    changeContent={changeContent}
                    setChangeContent={setChangeContent}
                    setIsFlipping={setIsFlipping}
                />
            </Intro>

            {/* Job Description */}
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={
                    "w-full m-auto sm:max-w-[80%] lg:absolute lg:bottom-18 lg:right-15 lg:h-[20vh] lg:w-[45vw] xl:bottom-22 xl:right-10 2xl:w-[40%] 2xl:h-fit"
                }
            >
                <JobDescription
                    id={id}
                    data={experiences}
                    changeContent={changeContent}
                    setChangeContent={setChangeContent}
                />
            </Intro>

            {/* Job Responsabilites */}
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className="w-full m-auto sm:max-w-[80%] mb-30 lg:hidden"
            >
                <JobResponsabilities job={job} />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={
                    "absolute bottom-8 w-full sm:w-auto sm:bottom-8 sm:right-3"
                }
            >
                <NavigationSection
                    backTo={"/experience"}
                    hasHomeButton
                    hasArrows
                />
            </Intro>
        </main>
    );
}

export default Experiences;
