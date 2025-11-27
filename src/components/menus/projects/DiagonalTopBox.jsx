function DiagonalTopBox() {
    return (
        <section className="absolute -inset-0 pointer-events-none z-0">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 size-full"
            >
                {/* Main Diagonal Background */}
                <polygon
                    points="0 0, 100 0, 100 25, 0 25"
                    className="fill-details-secund"
                />

                {/* Diagonal Border Line */}
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
                    points="0 20, 100 20, 100 25, 0 25"
                    className="fill-details-third"
                    // fill="url(#details-third-gradient-right)"
                />
            </svg>
        </section>
    );
}

export default DiagonalTopBox;
