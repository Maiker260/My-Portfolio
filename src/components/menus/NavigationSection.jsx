import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../icons/BackButton.jsx";
import { Home } from "../icons/Home.jsx";

function NavigationSection({
    className,
    hasText = false,
    hasBlackButton,
    hasHomeButton,
    description,
    backTo = null,
}) {
    const navigate = useNavigate();

    useEffect(() => {
        const handleBKey = (e) => {
            if (e.key.toLowerCase() === "b") {
                if (backTo) {
                    navigate(backTo);
                }
            }
        };

        window.addEventListener("keydown", handleBKey);
        return () => window.removeEventListener("keydown", handleBKey);
    }, [navigate, backTo]);

    return (
        <article
            className={`flex flex-col gap-3 font-rodin text-shadow-back-info text-white ${className}`}
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
                    <Link
                        to={"/"}
                        className="flex items-center gap-0.5 text-2xl hover:scale-110 hover:cursor-pointer"
                    >
                        <div className="bg-black w-7 h-7 p-1.5 rounded-full flex items-center justify-center">
                            <Home className={`w-fit fill-white`} />
                        </div>
                        Home
                    </Link>
                )}
                <Link
                    to={backTo}
                    className="flex items-center gap-0.5 text-2xl hover:scale-110 hover:cursor-pointer"
                >
                    <BackButton
                        className={`w-7 ${
                            hasBlackButton ? "fill-black" : "fill-white"
                        } `}
                    />
                    Back
                </Link>
            </div>
        </article>
    );
}

export default NavigationSection;
