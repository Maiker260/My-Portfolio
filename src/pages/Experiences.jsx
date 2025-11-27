import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/projects/animations/Intro.jsx";
import UpperLeft from "../components/menus/experiences/UpperLeft.jsx";
import LowerRight from "../components/menus/experiences/LowerRight.jsx";
import CardFlip from "../components/layout/CardFlip.jsx";
import { creatorData } from "../services/data/creatorData.js";

function Experiences() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [changeContent, setChangeContent] = useState(false);

    const { id } = useParams();
    const { experiences } = creatorData;
    const totalExperiences = experiences.length;

    // Preload Images
    useEffect(() => {
        experiences.forEach((exp) => {
            const img = new Image();
            img.src = exp.logo;
        });

        const back = new Image();
        back.src = "/other/card.webp";
    }, [experiences]);

    return (
        <main className="relative min-h-screen w-full max-w-[1920px] mx-auto overflow-hidden color-bg-details-third-gradient-top font-rodin">
            {/* White Background Line */}
            <svg
                className="absolute inset-0 size-full overflow-hidden"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon
                    points="100 0, 100 80, 85 100, 10 100, 90 0"
                    fill="#f3f1f2"
                />
            </svg>

            {/* Job Data */}
            <Intro
                start={{ x: "-100%" }}
                end={{ x: "0" }}
                className={"absolute top-15 left-0 h-[25vh] w-[40vw]"}
            >
                <UpperLeft
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

            {/* Job Description */}
            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={"absolute bottom-18 right-40 h-[20vh] w-[35vw]"}
            >
                <LowerRight
                    id={id}
                    data={experiences}
                    changeContent={changeContent}
                    setChangeContent={setChangeContent}
                />
            </Intro>

            {/* Middle Card */}
            <Intro
                start={{ scale: 0, opacity: 0 }}
                end={{ scale: 1, opacity: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-[70%] rotate-10 w-3xs h-96 rounded-xl"
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

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={"absolute bottom-8 right-3 z-50"}
            >
                <NavigationSection backTo={"/experience"} hasHomeButton />
            </Intro>
        </main>
    );
}

export default Experiences;
