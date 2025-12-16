import AnimatedBump from "./animations/AnimatedBump.jsx";

function JobDescription({ id, data, changeContent, setChangeContent }) {
    const job = data[id];

    return (
        <AnimatedBump
            changeContent={changeContent}
            setChangeContent={setChangeContent}
            component={"lowerRight"}
            className={"h-full"}
        >
            <article
                className="flex flex-col gap-3 w-full color-bg-details-tenth px-10 pt-2 pb-4 font-skipstdb 2xl:px-12"
                style={{
                    clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)",
                }}
            >
                <div>
                    <h2 className="text-xl color-text-details-fourth lg:text-2xl">
                        {job.title}
                    </h2>
                </div>
                <div className="hidden lg:block">
                    <p className="text-base text-pretty text-white lg:text-lg">
                        {job.description}
                    </p>
                </div>
            </article>
        </AnimatedBump>
    );
}

export default JobDescription;
