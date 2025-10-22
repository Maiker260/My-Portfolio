import ListOption from "./ListOption.jsx";
import { projectData } from "../../../services/data/Projects.js";

const fakeData = [
    { name: "Test1", type: "none" },
    { name: "Test2", type: "none" },
    { name: "Test3", type: "none" },
    { name: "Test4", type: "none" },
    { name: "Test5", type: "none" },
    { name: "Test6", type: "none" },
    { name: "Test7", type: "none" },
    { name: "Test8", type: "none" },
];

function List({ className }) {
    return (
        <article className={className}>
            <div className="h-full flex flex-col gap-3 border-1">
                <h1 className="text-6xl color-text-details-main font-extrabold">
                    LIST
                </h1>
                <section className="h-full flex flex-col gap-3 ml-4 border-1 border-b-pink-400">
                    {fakeData.map((project, index) => (
                        <ListOption
                            key={project.name + index}
                            project={project}
                            index={index}
                        />
                    ))}
                </section>
            </div>
        </article>
    );
}

export default List;
