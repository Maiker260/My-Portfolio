function LowerRight({ id, data }) {
    const job = data[id];

    return (
        <article
            className="flex flex-col gap-2 w-full h-full color-bg-details-tenth px-12 pt-2 pb-4 font-skipstdb"
            style={{ clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)" }}
        >
            <div>
                <h2 className="text-3xl color-text-details-fourth">
                    {job.title}
                </h2>
            </div>
            <div>
                <p className="text-lg text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus voluptates reiciendis aspernatur rerum nihil odit
                    dicta consequuntur odio quibusdam! Dicta?
                </p>
            </div>
        </article>
    );
}

export default LowerRight;
