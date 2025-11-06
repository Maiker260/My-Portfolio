export const skillCarouselSettings = (customDotElem) => {
    return {
        customPaging: (i) => customDotElem(i),
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        draggable: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, centerMode: false },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, centerMode: false },
            },
        ],
    };
};
