import List from "../components/menus/projects-list/List.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/projects-list/animations/intro.jsx";

function ProjectList() {
    return (
        <div className="relative min-h-screen overflow-hidden color-bg-details-third-gradient-top font-rodin">
            <div
                className="relative min-h-screen overflow-hidden color-bg-details-third"
                style={{
                    clipPath:
                        "polygon(70% 0, 100% 0, 100% 45%, 65% 100%, 0 100%, 0 97%)",
                }}
            >
                <h2 className="color-text-details-fifth tracking-[-0.1em] text-9xl absolute bottom-[30%] right-0 -rotate-42 pointer-events-none">
                    PROJECTS
                </h2>
            </div>
            <List
                className={
                    "absolute top-[10%] left-[4%] h-[78%] w-[40vw] z-50 p-4 origin-top-left"
                }
            />
            <Intro start={{ x: "20%" }} end={{ x: "0" }}>
                <NavigationSection
                    className={"absolute bottom-8 right-3"}
                    hasText
                    description={"Which Project do you want to view?"}
                    backTo={"/"}
                />
            </Intro>
        </div>
    );
}

export default ProjectList;
