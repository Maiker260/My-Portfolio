import { Link } from "react-router-dom";
import ListOption from "./ListOption.jsx";

function List({ showContent }) {
    const items = [
        { name: "PROJECTS", titleType: "main", url: "/projects" },
        {
            name: "EXPERIENCE",
            titleType: "third",
        },
        {
            name: "SKILLS",
            titleType: "sec",
        },
        {
            name: "ABOUT ME",
            titleType: "main",
        },
        {
            name: "DOWNLOAD CV",
            titleType: "third",
        },
        {
            name: "CONTACT",
            titleType: "sec",
        },
    ];

    const total = items.length;

    // delay between each item in ms
    const stagger = 90;

    return (
        <section className="flex flex-col text-center gap-2 -rotate-4 ">
            {items.map((item, i) => {
                // bottom element appears first
                const delay = `${650 + (total - 1 - i) * stagger}ms`;

                return (
                    <Link
                        to={item.url}
                        key={item.name}
                        className={item.wrapper ?? ""}
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
    );
}

export default List;
