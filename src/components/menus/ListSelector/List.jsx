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
                <div className="size-full flex flex-col gap-2 ">
                    <h1 className="text-4xl sm:text-6xl tracking-[-0.06em] color-text-details-main font-rodin font-extrabold">
                        LIST
                    </h1>
                    <section className="sm:ml-4 sm:p-1 size-full flex flex-col gap-1 overflow-y-auto hide-scrollbar snap-y snap-mandatory scroll-smooth font-skipstdb">
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
