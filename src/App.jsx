import { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";

export default function App() {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="relative min-h-screen">
            <BackgroundVideo onLoopStart={() => setShowContent(true)} />

            <main
                className={`relative z-10 flex items-center justify-center min-h-screen text-white transition-opacity duration-1000 ${
                    showContent ? "opacity-100" : "opacity-0"
                }`}
            >
                <h1 className="text-5xl font-bold">My Portfolio</h1>
            </main>
        </div>
    );
}
