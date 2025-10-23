import ListOption from "./ListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";

function List({ className }) {
    const projects = creatorData.projects;

    return (
        <article className={className}>
            <div className="h-full w-full flex flex-col gap-2 ">
                <h1 className="text-6xl color-text-details-main font-extrabold tracking-[-0.06em]">
                    LIST
                </h1>
                <section className="h-full w-full flex flex-col gap-3 ml-4 overflow-y-auto hide-scrollbar snap-y snap-mandatory scroll-smooth">
                    {projects.map((project, index) => (
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
