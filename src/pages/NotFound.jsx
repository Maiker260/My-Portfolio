import { useNavigate } from "react-router-dom";
import NavigationSection from "../components/menus/NavigationSection.jsx";

function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center gap-4 p-6 overflow-hidden color-bg-details-third-gradient-top font-skipstdb">
            <h1 className="text-5xl font-bold text-white">404</h1>
            <p className="text-lg opacity-80 text-white">
                The page you're looking for doesn't exist.
            </p>

            <button
                onClick={() => navigate("/")}
                className="px-5 py-2 rounded-md color-text-details-fourth color-bg-details-secund transition hover:bg-[#84daf7] hover:text-neutral-800 hover:cursor-pointer"
            >
                Go to Home
            </button>
            <NavigationSection
                className={
                    "absolute bottom-0 left-1/2 -translate-x-1/2 sm:absolute sm:bottom-8 sm:right-3 sm:left-auto sm:translate-x-0"
                }
                hasHomeButton
                disableBackButton
            />
        </main>
    );
}

export default NotFound;
