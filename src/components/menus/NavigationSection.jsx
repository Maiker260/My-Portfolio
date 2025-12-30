import { useEffect, useContext } from "react";
import { MainPageContext } from "../../context/MainPageContext.jsx";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../icons/BackButton.jsx";
import { Home } from "../icons/Home.jsx";
import { icons } from "../icons/icons.js";

function NavigationSection({
    className,
    hasText = false,
    hasBlackButton,
    hasHomeButton,
    hasArrows,
    description,
    backTo = null,
    parentSection = null,
    disableBackButton,
}) {
    const { HorizontalArrows } = icons;

    const navigate = useNavigate();
    const { setBackHomeTransition, setCurrentPage } =
        useContext(MainPageContext);

    useEffect(() => {
        const handleReturnKeys = (e) => {
            if (e.key.toLowerCase() === "b") {
                if (backTo === "/") {
                    setCurrentPage(parentSection);
                    setBackHomeTransition(true);
                    navigate(backTo);
                } else {
                    navigate(backTo);
                }
            } else if (e.key === "Escape" || e.key === "Home") {
                if (hasHomeButton) {
                    e.preventDefault();
                    setBackHomeTransition(false);
                    navigate("/");
                }
            }
        };

        window.addEventListener("keydown", handleReturnKeys);
        return () => window.removeEventListener("keydown", handleReturnKeys);
    }, [
        navigate,
        setBackHomeTransition,
        setCurrentPage,
        backTo,
        parentSection,
        hasHomeButton,
    ]);

    const handleBackButton = (e) => {
        if (backTo === "/") {
            e.preventDefault();
            setCurrentPage(parentSection);
            setBackHomeTransition(true);
            navigate(backTo);
        } else {
            navigate(backTo);
        }
    };

    const handleHomeButton = (e) => {
        e.preventDefault();
        setBackHomeTransition(false);
        navigate("/");
    };

    return (
        <article
            className={`w-full px-4 sm:w-auto flex flex-col gap-3 font-rodin text-shadow-back-info text-white select-none ${className}`}
        >
            {hasText && (
                <div className="flex flex-col justify-start gap-1 sm:gap-0 select-none">
                    <span className="text-base sm:text-2xl sm:pr-8">
                        {description}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-xs">Guide</span>
                        <div className="w-full h-0.5 flex justify-center items-center overflow-hidden bg-white"></div>
                    </div>
                </div>
            )}
            <div className="flex items-center gap-4 self-center sm:self-end pr-8 w-fit text-shadow-back-info">
                {hasArrows && (
                    <button className="flex items-center gap-0.5 text-2xl">
                        <div
                            className={`${
                                hasBlackButton ? "bg-black" : "bg-white"
                            } w-7 h-7 p-0.5 rounded-full flex items-center justify-center`}
                        >
                            <HorizontalArrows
                                color={`${hasBlackButton ? "white" : "black"} `}
                            />
                        </div>
                        Move
                    </button>
                )}
                {hasHomeButton && (
                    <button
                        onClick={handleHomeButton}
                        className="flex items-center gap-0.5 text-2xl hover:scale-110 hover:cursor-pointer"
                    >
                        <div
                            className={`${
                                hasBlackButton ? "bg-black" : "bg-white"
                            } w-7 h-7 p-1.5 rounded-full flex items-center justify-center`}
                        >
                            <Home
                                className={`w-fit ${
                                    hasBlackButton ? "text-white" : "text-black"
                                }`}
                            />
                        </div>
                        Home
                    </button>
                )}
                {!disableBackButton && (
                    <button
                        className="flex items-center gap-0.5 text-2xl hover:scale-110 hover:cursor-pointer"
                        onClick={handleBackButton}
                    >
                        <BackButton
                            className={`w-7 ${
                                hasBlackButton ? "fill-black" : "fill-white"
                            } `}
                        />
                        Back
                    </button>
                )}
            </div>
        </article>
    );
}

export default NavigationSection;
