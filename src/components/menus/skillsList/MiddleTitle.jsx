import Intro from "./animations/Intro.jsx";

function MiddleTitle({ currentSkill, isAnimationDisable }) {
    const { name, description } = currentSkill;

    return (
        <section className="flex flex-col gap-6 md:gap-5 items-center w-full h-[25vh] font-skipstdb text-white">
            <div className="relative w-full flex flex-col justify-center">
                <Intro
                    key={currentSkill.name}
                    start={{ x: "10%" }}
                    end={{ x: "0" }}
                    className="text-2xl relative origin-center md:text-4xl lg:text-6xl lg:left-[39%] lg:top-1.5"
                    isAnimationDisable={isAnimationDisable}
                >
                    <h2 className="text-center lg:text-left">
                        {name.toUpperCase()}
                    </h2>
                </Intro>
                <div className="w-[80%] md:w-[65%] h-1 flex justify-center self-end items-center overflow-hidden bg-white" />
            </div>
            <div className="w-full relative origin-center lg:left-[40%] lg:top-1.5 ">
                <Intro
                    key={currentSkill.name}
                    start={{ x: "25%" }}
                    end={{ x: "0" }}
                    className="max-w-md text-base text-center text-balance px-2 m-auto md:text-lg lg:m-0 lg:max-w-lg lg:px-0 lg:text-xl "
                    isAnimationDisable={isAnimationDisable}
                >
                    <li className="list-none">{description}</li>
                </Intro>
            </div>
        </section>
    );
}

export default MiddleTitle;
