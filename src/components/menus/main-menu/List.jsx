import ListOption from "./ListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import { pageComponents } from "../../../services/data/pageComponents.js";

function List({
    showContent,
    showTransition,
    setShowTransition,
    setNextUrl,
    isAnimationDisable,
    setPreloadedPage,
}) {
    const menuList = creatorData.infoList;
    const total = menuList.length;
    const stagger = 90;

    const handleClick = (e, item) => {
        if (showTransition) return;

        e.preventDefault();

        const nextComponent = pageComponents[item.component];

        setPreloadedPage(() => nextComponent);
        setNextUrl(item.url);

        setTimeout(() => {
            setShowTransition(true);
        }, 50);
    };

    const preloadPage = (key) => {
        const componentImport = {
            Projects: () => import("../../../pages/ProjectList.jsx"),
            Experience: () => import("../../../pages/ExperienceList.jsx"),
            Skills: () => import("../../../pages/SkillsList.jsx"),
            Education: () => import("../../../pages/Education.jsx"),
            AboutMe: () => import("../../../pages/AboutMe.jsx"),
        };

        componentImport[key]?.();
    };

    return (
        <>
            <section className="flex flex-col text-center lg:gap-0 lg:-rotate-4 ">
                {menuList.map((item, i) => {
                    // bottom element appears first
                    const delay = `${650 + (total - 1 - i) * stagger}ms`;

                    return (
                        <button key={item.name}>
                            <ListOption
                                onClick={(e) => handleClick(e, item)}
                                onMouseEnter={() => preloadPage(item.component)}
                                onTouchStart={() => preloadPage(item.component)}
                                {...item}
                                delay={delay}
                                index={i}
                                showContent={showContent}
                                showTransition={showTransition}
                                isAnimationDisable={isAnimationDisable}
                            />
                        </button>
                    );
                })}
            </section>
        </>
    );
}

export default List;
