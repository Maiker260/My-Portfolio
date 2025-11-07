function MiddleTitle({ currentSkill }) {
    const { name, description } = currentSkill;

    return (
        <section className="flex flex-col gap-5 items-center w-full h-[25vh] font-skipstdb text-white">
            <div className="relative w-full flex flex-col justify-center">
                <h2 className="text-6xl relative left-[39%] top-1.5 origin-center">
                    {name.toUpperCase()}
                </h2>
                <div className="w-[65%] h-1 flex justify-center self-end items-center overflow-hidden bg-white" />
            </div>
            <div className="w-full relative left-[45%] top-1.5 origin-center">
                <h3 className="max-w-lg text-xl text-balance">{description}</h3>
            </div>
        </section>
    );
}

export default MiddleTitle;
