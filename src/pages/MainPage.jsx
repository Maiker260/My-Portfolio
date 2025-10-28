import { useState, useEffect } from "react";
import List from "../components/menus/main-menu/List.jsx";
import Intro from "../components/menus/main-menu/animations/Intro.jsx";
import MainTitle from "../components/menus/main-menu/MainTitle.jsx";
import BackgroundVideo from "../components/layout/BackgroundVideo.jsx";
import SocialMediaIcons from "../components/menus/main-menu/SocialMediaIcons.jsx";
import Transition from "../components/menus/main-menu/animations/Transition.jsx";
import { pageComponents } from "../services/data/pageComponents.js";

function MainPage() {
    const [showContent, setShowContent] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [nextContent, setNextContent] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        // Delay to visually align list with intro animation
        const introDelay = 795;
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
                <div className="flex justify-between items-center w-full h-lvh p-8">
                    <section className="self-start h-fit">
                        <Intro
                            showContent={showContent}
                            component={MainTitle}
                        />
                    </section>

                    <Intro
                        showContent={showContent}
                        component={List}
                        showTransition={showTransition}
                        setShowTransition={setShowTransition}
                        setNextContent={setNextContent}
                        setNextUrl={setNextUrl}
                    />

                    <section className="w-1/16 h-full flex flex-col justify-between">
                        <SocialMediaIcons showContent={showContent} />
                        <div>
                            <p className="text-sm ">
                                {/* Inspired by Persona 3 Reload. */}
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            {showTransition && (
                <Transition
                    nextUrl={nextUrl}
                    NextPage={nextContent ? pageComponents[nextContent] : null}
                />
            )}
        </div>
    );
}

export default MainPage;
