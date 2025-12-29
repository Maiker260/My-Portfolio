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
import useIsDesktop from "../../hooks/useIsDesktop.js";

function MainPage() {
    const [showContent, setShowContent] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [nextContent, setNextContent] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);

    const { backHomeTransition } = useContext(MainPageContext);

    const isDesktop = useIsDesktop(); // lg breakpoint (1024px)
    const disableIntroAnimation = !isDesktop;

    useEffect(() => {
        if (!isDesktop || backHomeTransition) {
            setShowContent(true);
            return;
        }

        // Delay to visually align list with intro animation
        const introDelay = 795;
        const timer = setTimeout(() => setShowContent(true), introDelay);

        return () => clearTimeout(timer);
    }, [backHomeTransition, isDesktop]);

    return (
        <>
            {backHomeTransition && <TransitionToMainPage />}
            <div
                className={`relative min-h-screen mx-auto max-w-[1920px] 2xl:max-w-[2200px] 3xl:max-w-[2560px] ${
                    isDesktop ? null : "color-bg-details-third-gradient-top"
                }`}
            >
                {/* Only in Desktop */}
                <BackgroundVideo isAnimationDisable={backHomeTransition} />

                {/* Content */}
                <main
                    className={`relative min-h-screen w-full text-white transition-opacity duration-400 z-10 overflow-x-hidden ${
                        showContent ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-10 w-full h-[100vh] py-10 p-4 lg:flex-row lg:justify-between lg:items-center lg:gap-0 lg:p-8">
                        {/* Owner Title */}
                        <section className="self-start h-fit mx-auto lg:m-0">
                            <Intro
                                showContent={showContent}
                                component={MainTitle}
                                cameFromTransition={backHomeTransition}
                                isAnimationDisable={disableIntroAnimation}
                            />
                        </section>

                        {/* List */}
                        <Intro
                            showContent={showContent}
                            component={List}
                            showTransition={showTransition}
                            setShowTransition={setShowTransition}
                            setNextContent={setNextContent}
                            setNextUrl={setNextUrl}
                            cameFromTransition={
                                disableIntroAnimation || backHomeTransition
                            }
                            className={"w-fit m-auto"}
                        />

                        {/* Icons */}
                        <section className="w-full lg:size-full lg:w-[6vw]">
                            <SocialMediaIcons
                                showContent={showContent}
                                isAnimationDisable={
                                    disableIntroAnimation || backHomeTransition
                                }
                                isDesktop={isDesktop}
                            />
                        </section>

                        <div className="pb-20 mx-auto lg:z-50 lg:absolute lg:bottom-10 lg:right-0 lg:max-w-[15ch] lg:p-0 lg:m-0">
                            <p className="text-sm text-gray-400 select-none">
                                Design inspired by Persona 3 Reload.
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full text-2xl px-3 text-center mx-auto bg-white text-neutral-800 lg:hidden">
                            <p>
                                For the best experience, please view this site
                                on a desktop.
                            </p>
                        </div>
                    </div>
                </main>

                {/* Transition to the Next Page */}
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
