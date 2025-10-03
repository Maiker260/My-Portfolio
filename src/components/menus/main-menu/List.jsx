import ListOption from "./ListOption.jsx";

function List() {
    const itemBehindClasses = "-mt-1";
    const itemInFrontClasses = "mt-5";

    const items = [
        { name: "PROJECTS", titleType: "main" },
        {
            name: "EXPERIENCE",
            titleType: "third",
            // wrapper: itemBehindClasses
        },
        {
            name: "SKILLS",
            titleType: "sec",
            isRotated: true,
            // wrapper: itemInFrontClasses,
        },
        {
            name: "ABOUT ME",
            titleType: "main",
            isRotated: true,
        },
        {
            name: "DOWNLOAD CV",
            titleType: "third",

            // wrapper: itemBehindClasses,
        },
        {
            name: "CONTACT",
            isRotated: true,
            titleType: "sec",
            // wrapper: itemInFrontClasses,
        },
    ];

    const total = items.length;
    const stagger = 90; // delay between each item in ms

    return (
        <section className="flex flex-col gap-2 relative top-2/4 left-1/13">
            {items.map((item, i) => {
                // bottom element appears first
                const delay = `${800 + (total - 1 - i) * stagger}ms`;

                return (
                    <div key={item.name} className={item.wrapper ?? ""}>
                        <ListOption {...item} delay={delay} />
                    </div>
                );
            })}
        </section>
    );
}

export default List;
