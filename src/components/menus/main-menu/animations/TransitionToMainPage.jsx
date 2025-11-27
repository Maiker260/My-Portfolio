import { useContext } from "react";
import { MainPageContext } from "../../../../context/MainPageContext.jsx";
import { pageComponents } from "../../../../services/data/pageComponents.js";

function TransitionToMainPage() {
    const { currentPage } = useContext(MainPageContext);

    const PreviousComponent = pageComponents[currentPage];

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    maskImage: "url(/other/abstract-form.svg)",
                    WebkitMaskImage: "url(/other/abstract-form.svg)",

                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "40% 40%",
                    WebkitMaskPosition: "40% 40%",
                    animation: "transitionToHomePage 0.4s forwards ease-in-out",
                }}
            >
                <div className="size-full">
                    <PreviousComponent disableIntro />
                </div>
            </div>
        </div>
    );
}

export default TransitionToMainPage;
