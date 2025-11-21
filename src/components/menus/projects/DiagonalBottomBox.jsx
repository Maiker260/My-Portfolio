function DiagonalBottomBox() {
    return (
        <section className="absolute -inset-0 pointer-events-none z-0">
            <svg
                className="absolute -inset-0 size-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient
                        id="details-third-gradient-right"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#0104b0" />
                        <stop offset="20%" stopColor="#0c27b7" />
                        <stop offset="40%" stopColor="#1d49bf" />
                        <stop offset="60%" stopColor="#2c66c9" />
                        <stop offset="75%" stopColor="#3d87df" />
                        <stop offset="90%" stopColor="#62d4fa" />
                        <stop offset="95%" stopColor="#86fcfd" />
                    </linearGradient>
                </defs>

                <polygon
                    points="100,20 100,75 45,100 0,100 0,75"
                    // points="100,20 100,65 25,100 0,100 0,75"
                    // points="0,65 100,25 100,65 0,100"
                    // points="0 0, 100 0, 100 26, 0 100"
                    className="fill-details-third"
                    // fill="url(#details-third-gradient-right)"
                />
            </svg>
        </section>

        // <section className="relative overflow-hidden color-bg-details-third size-full">
        //     {/* <section className="relative overflow-hidden color-bg-details-third h-[65vh]"> */}
        //     {/* Diagonal background */}
        //     <div
        //         className="absolute inset-0 color-bg-details-third-gradient-right color-text-details-main overflow-hidden"
        //         style={{
        //             clipPath:
        //                 "polygon(100% 0, 100% 65%, 42% 100%, 0 100%, 0 44%)",
        //         }}
        //     ></div>
        // </section>
    );
}

export default DiagonalBottomBox;
