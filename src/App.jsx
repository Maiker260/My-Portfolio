import { useState, useEffect } from "react";
import BackgroundVideo from "./components/layout/BackgroundVideo";
import List from "./components/menus/main-menu/List.jsx";
import { motion as Motion } from "motion/react";

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
                {/* Bouncing Effect when loading the List */}
                <Motion.div
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={
                        showContent
                            ? { y: "10%", opacity: 1 }
                            : { y: "0", opacity: 0 }
                    } // move down
                    transition={{
                        duration: 0.5,
                        ease: [0.33, 1, 0.68, 1],
                    }}
                    className="relative flex flex-col items-center translate-x-12"
                >
                    <List />
                </Motion.div>
            </main>
        </div>
    );
}
