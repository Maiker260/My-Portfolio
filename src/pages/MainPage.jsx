import { useState, useEffect, useContext } from "react";
import { MainPageContext } from "../context/MainPageContext.jsx";
import List from "../components/menus/main-menu/List.jsx";
import Intro from "../components/menus/main-menu/animations/Intro.jsx";
import MainTitle from "../components/menus/main-menu/MainTitle.jsx";
import BackgroundVideo from "../components/layout/BackgroundVideo.jsx";
import SocialMediaIcons from "../components/menus/main-menu/SocialMediaIcons.jsx";
import { pageComponents } from "../services/data/pageComponents.js";
import TransitionNextPage from "../components/menus/main-menu/animations/TransitionNextPage.jsx";
import TransitionToMainPage from "../components/menus/main-menu/animations/TransitionToMainPage.jsx";

function MainPage() {
    const [showContent, setShowContent] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [nextContent, setNextContent] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);

    const { backHomeTransition } = useContext(MainPageContext);

    useEffect(() => {
        if (backHomeTransition) {
            setShowContent(true);
        }

        // Delay to visually align list with intro animation
        const introDelay = 795;
        const timer = setTimeout(() => setShowContent(true), introDelay);
        return () => clearTimeout(timer);
    }, [backHomeTransition]);

    return (
        <>
            {backHomeTransition && <TransitionToMainPage />}
            <div className="relative min-h-screen max-w-[1920px] mx-auto">
                <BackgroundVideo isAnimationDisable={backHomeTransition} />
                <main
                    className={`relative z-10 flex items-center justify-center min-h-screen text-white transition-opacity duration-400 ${
                        showContent ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* Left Side */}
                    <div className="flex justify-between items-center w-full h-lvh p-8">
                        <section className="self-start h-fit">
                            <Intro
                                showContent={showContent}
                                component={MainTitle}
                                cameFromTransition={backHomeTransition}
                            />
                        </section>

                        {/* Middle Side */}
                        <Intro
                            showContent={showContent}
                            component={List}
                            showTransition={showTransition}
                            setShowTransition={setShowTransition}
                            setNextContent={setNextContent}
                            setNextUrl={setNextUrl}
                            cameFromTransition={backHomeTransition}
                        />

                        {/* Right Side */}
                        <section className="w-1/16 h-full flex flex-col justify-between">
                            <SocialMediaIcons
                                showContent={showContent}
                                isAnimationDisable={backHomeTransition}
                            />
                            <div>
                                <p className="text-sm ">
                                    {/* Inspired by Persona 3 Reload. */}
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
                {showTransition && (
                    <TransitionNextPage
                        nextUrl={nextUrl}
                        NextPage={
                            nextContent ? pageComponents[nextContent] : null
                        }
                    />
                )}
            </div>
        </>
    );
}

export default MainPage;
