import { Link } from "react-router-dom";
import ListOption from "./ListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";

function List({ showContent, setShowTransition, setNextContent, setNextUrl }) {
    const menuList = creatorData.infoList;
    const total = menuList.length;
    const stagger = 90;

    const handleClick = (e, item) => {
        e.preventDefault();
        setNextContent(item.component);
        setNextUrl(item.url);
        setShowTransition(true);
    };

    return (
        <>
            <section className="flex flex-col text-center gap-2 -rotate-4 ">
                {menuList.map((item, i) => {
                    // bottom element appears first
                    const delay = `${650 + (total - 1 - i) * stagger}ms`;

                    return (
                        <Link
                            to={item.url}
                            key={item.name}
                            onClick={(e) => handleClick(e, item)}
                        >
                            <ListOption
                                {...item}
                                delay={delay}
                                index={i}
                                showContent={showContent}
                            />
                        </Link>
                    );
                })}
            </section>
        </>
    );
}

export default List;
