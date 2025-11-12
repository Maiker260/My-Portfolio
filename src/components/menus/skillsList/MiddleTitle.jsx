import Intro from "./animations/Intro.jsx";

function MiddleTitle({ currentSkill, isAnimationDisable }) {
    const { name, description } = currentSkill;

    return (
        <section className="flex flex-col gap-5 items-center w-full h-[25vh] font-skipstdb text-white">
            <div className="relative w-full flex flex-col justify-center">
                <Intro
                    key={currentSkill.name}
                    start={{ x: "10%" }}
                    end={{ x: "0" }}
                    className="text-6xl relative left-[39%] top-1.5 origin-center"
                    isAnimationDisable={isAnimationDisable}
                >
                    <h2>{name.toUpperCase()}</h2>
                </Intro>
                <div className="w-[65%] h-1 flex justify-center self-end items-center overflow-hidden bg-white" />
            </div>
            <div className="w-full relative left-[40%] top-1.5 origin-center">
                <Intro
                    key={currentSkill.name}
                    start={{ x: "25%" }}
                    end={{ x: "0" }}
                    className="max-w-lg text-xl text-balance"
                    isAnimationDisable={isAnimationDisable}
                >
                    <li>{description}</li>
                </Intro>
            </div>
        </section>
    );
}

export default MiddleTitle;
