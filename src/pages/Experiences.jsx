import NavigationSection from "../components/menus/NavigationSection.jsx";
import UpperLeft from "../components/menus/experiences/UpperLeft.jsx";
import Intro from "../components/menus/projects/animations/intro.jsx";

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
            <NavigationSection
                className={"absolute bottom-8 right-3 z-50"}
                backTo={"/experience"}
            />
        </main>

        // NEED TO ADD THIS TO THE EXPERIENCE ITEM PAGE
        // <img
        //             src="/other/card.png"
        //             alt="card"
        //             className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-[120%] w-full max-w-[10vw] shadow-[0_0_15px_3px_#0511b6] animate-[breath_2s_ease-in-out_infinite]"
        //         />
    );
}

export default Experiences;
