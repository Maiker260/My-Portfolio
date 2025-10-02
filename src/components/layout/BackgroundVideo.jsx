import { useRef, useEffect, useState } from "react";

export default function BackgroundVideo({ onLoopStart }) {
    const introRef = useRef(null);
    const loopRef = useRef(null);
    const [showLoop, setShowLoop] = useState(false);

    useEffect(() => {
        const introVideo = introRef.current;
        const loopVideo = loopRef.current;

        if (introVideo) {
            introVideo.play();
            introVideo.onended = () => {
                setShowLoop(true);
                if (loopVideo) {
                    loopVideo.play();
                }
                if (onLoopStart) {
                    onLoopStart(); // notify parent (App)
                }
            };
        }
    }, [onLoopStart]);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Intro video (plays once) */}
            <video
                ref={introRef}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                    showLoop ? "opacity-0" : "opacity-100"
                }`}
                muted
                playsInline
            >
                <source src="/videos/Intro.mp4" type="video/mp4" />
            </video>

            {/* Loop video (hidden until intro finishes) */}
            <video
                ref={loopRef}
                className={`w-full h-full object-cover absolute inset-0 ${
                    showLoop ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
                playsInline
            >
                <source src="/videos/BLoop.mp4" type="video/mp4" />
            </video>
            {/* <div className="absolute inset-0 bg-black/10"></div>{" "} */}
        </div>
    );
}
