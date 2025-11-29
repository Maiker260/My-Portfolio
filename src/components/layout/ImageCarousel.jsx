import { useState, useEffect } from "react";
import AnimatedBump from "../animations/AnimatedBump.jsx";
import Intro from "../animations/Intro.jsx";

function ImageCarousel({ screenshots, buttonPressed, setButtonPressed }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [screenshots.length]);

    return (
        <AnimatedBump
            buttonPressed={buttonPressed}
            setButtonPressed={setButtonPressed}
            className="relative size-full overflow-hidden rounded-lg"
        >
            {/* Slides */}
            {screenshots.map((image, index) => (
                <div
                    key={image.alt}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                    }`}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className=" size-full object-cover"
                    />
                </div>
            ))}

            {/* Navigation */}
            <div className="absolute inset-0 flex justify-between items-center px-4 z-50">
                {/* Left arrow */}
                <button
                    onClick={prevSlide}
                    className={
                        "color-bg-details-fifth text-neutral p-2 rounded-xl transition hover:text-[#65dcfb] hover:bg-neutral-800 hover:cursor-pointer"
                    }
                >
                    &#10094;
                </button>
                {/* Right arrow */}
                <button
                    onClick={nextSlide}
                    className="color-bg-details-fifth text-neutral p-2 rounded-full transition hover:text-[#65dcfb] hover:bg-neutral-800 hover:cursor-pointer"
                >
                    &#10095;
                </button>
            </div>

            {/* Dots Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded flex space-x-2 z-50 color-bg-details-fifth p-1">
                {screenshots.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-neutral-800"
                                : "bg-white/50"
                        } hover:cursor-pointer hover:bg-white/80 `}
                    />
                ))}
            </div>
        </AnimatedBump>
    );
}

export default ImageCarousel;
