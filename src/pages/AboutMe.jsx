function AboutMe() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden color-bg-details-third-gradient-top">
            {/* Line Behind Horizontal Banner */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                <polygon points="100,20 100,70 0,100 12,48" fill="red" />
            </svg>

            {/* Horizontal Banner with Text */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                <polygon points="100,21 100,70 0,100 12,49" fill="white" />
            </svg>

            {/* Inner Black Banner */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                <polygon points="100,25 100,37 12,65 12,52" fill="black" />
            </svg>

            {/* Line Behind Profile Picture */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                <polygon
                    points="20,0 48,0 46,18 48,52 30,100 0,100 0,53 9,11"
                    fill="black"
                    opacity={"0.3"}
                />
            </svg>

            {/* Profile Picture */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-0 w-full h-full"
            >
                <polygon
                    points="20,0 47,0 45,18 47,52 29,100 0,100 0,53 9,11"
                    fill="#505972"
                />
            </svg>
        </main>
    );
}

export default AboutMe;
