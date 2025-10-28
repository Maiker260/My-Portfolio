import ListOption from "./ListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import Intro from "./animations/intro.jsx";

function List({ className, isAnimationDisable }) {
    const projects = creatorData.projects;

    return (
        <article className={className}>
            <Intro
                start={{ x: "-20%" }}
                end={{ x: "0" }}
                isAnimationDisable={isAnimationDisable}
            >
                <div className="h-full w-full flex flex-col gap-2 ">
                    <h1 className="text-6xl color-text-details-main font-extrabold tracking-[-0.06em]">
                        LIST
                    </h1>
                    <section className="h-full w-full flex flex-col gap-3 ml-4 overflow-y-auto hide-scrollbar snap-y snap-mandatory scroll-smooth">
                        {projects.map((project, index) => (
                            <Intro
                                key={project.name + index}
                                delay={index}
                                start={{ x: "-20%" }}
                                end={{ x: "0" }}
                                isAnimationDisable={isAnimationDisable}
                            >
                                <ListOption project={project} index={index} />
                            </Intro>
                        ))}
                    </section>
                </div>
            </Intro>
        </article>
    );
}

export default List;
