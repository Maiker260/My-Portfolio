import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { skillCarouselSettings } from "../../../utils/skillCarouselSettings.js";
import { creatorData } from "../../../services/data/creatorData.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillCarousel({ setCurrentSkill, currentSlide, setCurrentSlide }) {
    const sliderRef = useRef(null);
    const skills = creatorData.skills;

    useEffect(() => {
        sliderRef.current?.slickGoTo(currentSlide);
    }, [currentSlide]);

    const settings = {
        ...skillCarouselSettings,
        beforeChange: (_, next) => {
            setCurrentSkill(skills[next]);
            setCurrentSlide(next);
        },
    };

    const goNext = () => sliderRef.current?.slickNext();
    const goPrev = () => sliderRef.current?.slickPrev();

    const renderSlideButton = (index) => {
        const lastIndex = skills.length - 1;
        const prevIndex = currentSlide === 0 ? lastIndex : currentSlide - 1;
        const nextIndex = currentSlide === lastIndex ? 0 : currentSlide + 1;

        if (index === prevIndex) {
            return (
                <button
                    onClick={goPrev}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
            );
        }

        if (index === nextIndex) {
            return (
                <button
                    onClick={goNext}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
            );
        }

        return null;
    };

    return (
        <section className="w-full flex justify-center items-center py-8">
            <div className="w-full max-w-[60vw]">
                <Slider ref={sliderRef} {...settings} className="relative">
                    {skills.map((skill, index) => (
                        <div key={index} className=" px-4">
                            <div className="skill-card h-95 p-6 flex items-center justify-center rounded-md shadow-lg cursor-pointer">
                                {renderSlideButton(index)}
                                <img
                                    src={`/skillsLogos/${skill.img}`}
                                    alt={`${skill.name} image`}
                                    className="w-full h-full object-contain transition"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default SkillCarousel;
