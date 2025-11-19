import { useState } from "react";
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

    return (
        <main className="relative min-h-screen overflow-hidden color-bg-details-third-gradient-top font-rodin">
            {/* NEED TO CREATE AN ANIMATION TO MOVE THE DIV LINE TO THE RIGHT */}
            <div
                className="relative min-h-screen overflow-hidden color-bg-details-third"
                style={{
                    clipPath:
                        "polygon(100% 0, 100% 80%, 85% 100%, 10% 100%, 90% 0)",
                }}
            />

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
