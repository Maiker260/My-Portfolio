import ListOption from "./ListOption.jsx";
import Intro from "./animations/Intro.jsx";

function List({ data, className, isAnimationDisable }) {
    const items = data;

    return (
        <article className={className}>
            <Intro
                start={{ x: "-20%" }}
                end={{ x: "0" }}
                isAnimationDisable={isAnimationDisable}
            >
                <div className="h-full w-full flex flex-col gap-2 ">
                    <h1 className="text-6xl color-text-details-main font-rodin font-extrabold tracking-[-0.06em]">
                        LIST
                    </h1>
                    <section className="h-full w-full p-1 flex flex-col gap-3 ml-4 overflow-y-auto font-skipstdb hide-scrollbar snap-y snap-mandatory scroll-smooth">
                        {items.map((item, index) => (
                            <Intro
                                key={item.name + index}
                                delay={index}
                                start={{ x: "-20%" }}
                                end={{ x: "0" }}
                                isAnimationDisable={isAnimationDisable}
                            >
                                <ListOption item={item} index={index} />
                            </Intro>
                        ))}
                    </section>
                </div>
            </Intro>
        </article>
    );
}

export default List;
