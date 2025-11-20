function DiagonalTopBox() {
    return (
        <section className="relative overflow-hidden color-bg-details-third h-[35vh]">
            {/* Diagonal background */}
            <div
                className="absolute inset-0 color-bg-details-secund color-text-details-main overflow-hidden"
                style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 26%, 0 100%)",
                }}
            >
                {/* Diagonal Border Line */}
                <div
                    className="absolute inset-0 color-bg-details-third-gradient-right"
                    style={{
                        clipPath:
                            "polygon(0px 85%, 100% 12%, 100% 26%, 0px 100%)",
                    }}
                />
            </div>
        </section>
        // <svg
        //     className="relative overflow-hidden color-bg-details-third h-[35vh] w-full"
        //     viewBox="0 0 100 100"
        //     preserveAspectRatio="none"
        // >
        //     {/* Diagonal Border Line */}
        //     <polygon
        //         points="0 85, 100 12, 100 26, 0 100"
        //         className="color-bg-details-third-gradient-right"
        //     />

        //     {/* Main diagonal background */}
        //     <polygon
        //         points="0 0, 100 0, 100 26, 0 100"
        //         className="color-bg-details-secund fill-current"
        //     />
        // </svg>
    );
}

export default DiagonalTopBox;
