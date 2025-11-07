export const skillCarouselSettings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
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
