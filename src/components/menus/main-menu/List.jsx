import ListOption from "./ListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";

function List({
    showContent,
    showTransition,
    setShowTransition,
    setNextContent,
    setNextUrl,
    isAnimationDisable,
}) {
    const menuList = creatorData.infoList;
    const total = menuList.length;
    const stagger = 90;

    const handleClick = (e, item) => {
        if (!showTransition) {
            e.preventDefault();
            setNextContent(item.component);
            setNextUrl(item.url);
            setShowTransition(true);
        }
    };

    return (
        <>
            <section className="flex flex-col text-center gap-2 -rotate-4 ">
                {menuList.map((item, i) => {
                    // bottom element appears first
                    const delay = `${650 + (total - 1 - i) * stagger}ms`;

                    return (
                        <button key={item.name}>
                            <ListOption
                                onClick={(e) => handleClick(e, item)}
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
