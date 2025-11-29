import { useEffect, useContext } from "react";
import { MainPageContext } from "../../context/MainPageContext.jsx";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../icons/BackButton.jsx";
import { Home } from "../icons/Home.jsx";

function NavigationSection({
    className,
    hasText = false,
    hasBlackButton,
    hasHomeButton,
    description,
    backTo = null,
    parentSection = null,
}) {
    const navigate = useNavigate();
    const { setBackHomeTransition, setCurrentPage } =
        useContext(MainPageContext);

    useEffect(() => {
        const handleBKey = (e) => {
            if (e.key.toLowerCase() === "b") {
                if (backTo === "/") {
                    setCurrentPage(parentSection);
                    setBackHomeTransition(true);
                    navigate(backTo);
                } else {
                    navigate(backTo);
                }
            }
        };

        window.addEventListener("keydown", handleBKey);
        return () => window.removeEventListener("keydown", handleBKey);
    }, [
        navigate,
        setBackHomeTransition,
        setCurrentPage,
        backTo,
        parentSection,
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
            className={`flex flex-col gap-3 font-rodin text-shadow-back-info text-white select-none ${className}`}
        >
            {hasText && (
                <div className="flex flex-col justify-start select-none">
                    <span className="text-2xl pr-8">{description}</span>
                    <div className="flex items-center gap-1">
                        <span className="text-xs">Guide</span>
                        <div className="w-full h-0.5 flex justify-center items-center overflow-hidden bg-white"></div>
                    </div>
                </div>
            )}
            <div className="flex items-center gap-4 self-end pr-8 w-fit text-shadow-back-info">
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
            </div>
        </article>
    );
}

export default NavigationSection;
