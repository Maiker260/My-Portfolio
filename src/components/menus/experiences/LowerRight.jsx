import AnimatedBump from "./animations/AnimatedBump.jsx";

function LowerRight({ id, data, changeContent, setChangeContent }) {
    const job = data[id];

    return (
        <AnimatedBump
            changeContent={changeContent}
            setChangeContent={setChangeContent}
            component={"lowerRight"}
            className={"h-full"}
        >
            <article
                className="flex flex-col gap-3 w-full h-full color-bg-details-tenth px-12 pt-2 pb-4 font-skipstdb"
                style={{
                    clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)",
                }}
            >
                <div>
                    <h2 className="text-3xl color-text-details-fourth">
                        {job.title}
                    </h2>
                </div>
                <div>
                    <p className="text-lg text-white">{job.description}</p>
                </div>
            </article>
        </AnimatedBump>
    );
}

export default LowerRight;
