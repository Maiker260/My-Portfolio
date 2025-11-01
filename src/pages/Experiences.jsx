import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/projects/animations/intro.jsx";
import UpperLeft from "../components/menus/experiences/UpperLeft.jsx";
import LowerRight from "../components/menus/experiences/LowerRight.jsx";
import CardFlip from "../components/layout/CardFlip.jsx";

function Experiences() {
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
                <UpperLeft />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={"absolute bottom-16 right-40 h-[20vh] w-[35vw]"}
            >
                <LowerRight />
            </Intro>

            <Intro
                start={{ scale: 0, opacity: 0 }}
                end={{ scale: 1, opacity: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[120%] rotate-10 w-[15vw] h-[20%] rounded-xl"
            >
                <CardFlip />
            </Intro>

            <Intro
                start={{ x: "100%" }}
                end={{ x: "0" }}
                className={"absolute bottom-8 right-3 z-50"}
            >
                <NavigationSection backTo={"/experience"} />
            </Intro>
        </main>
    );
}

export default Experiences;
