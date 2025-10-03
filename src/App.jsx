import { useState, useEffect } from "react";
import BackgroundVideo from "./components/layout/BackgroundVideo";
import List from "./components/menus/main-menu/List.jsx";

export default function App() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Delay to visually align list with intro animation
        const introDelay = 100;
        const timer = setTimeout(() => setShowContent(true), introDelay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen">
            <BackgroundVideo
                onLoopStart={() => {
                    setTimeout(() => setShowContent(true), 700);
                }}
            />

            <main
                className={`relative z-10 flex items-center justify-center min-h-screen text-white transition-opacity duration-400 ${
                    showContent ? "opacity-100" : "opacity-0"
                }`}
            >
                <List />
            </main>
        </div>
    );
}
