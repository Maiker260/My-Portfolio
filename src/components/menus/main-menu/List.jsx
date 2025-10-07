import ListOption from "./ListOption.jsx";

function List() {
    const items = [
        { name: "PROJECTS", titleType: "main" },
        {
            name: "EXPERIENCE",
            titleType: "third",
        },
        {
            name: "SKILLS",
            titleType: "sec",
            isRotated: true,
        },
        {
            name: "ABOUT ME",
            titleType: "main",
            isRotated: true,
        },
        {
            name: "DOWNLOAD CV",
            titleType: "third",
        },
        {
            name: "CONTACT",
            isRotated: true,
            titleType: "sec",
        },
    ];

    const total = items.length;
    const stagger = 90; // delay between each item in ms

    return (
        <section className="flex flex-col gap-2 items-center -rotate-4">
            {items.map((item, i) => {
                // bottom element appears first
                // const delay = `${800 + (total - 1 - i) * stagger}ms`;
                const delay = `${650 + (total - 1 - i) * stagger}ms`;

                return (
                    <div key={item.name} className={item.wrapper ?? ""}>
                        <ListOption {...item} delay={delay} index={i} />
                    </div>
                );
            })}
        </section>
    );
}

export default List;
