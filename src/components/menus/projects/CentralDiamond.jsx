function CentralDiamond() {
    return (
        <section className="absolute -top-22 -right-30 h-[120%] w-[70vw] flex items-center justify-center z-20 pointer-events-none">
            <div
                className="relative w-full h-full color-bg-details-third flex p-6"
                style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
            >
                <div
                    className="relative w-full h-full color-bg-details-third-gradient flex items-center justify-center p-2"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center bg-neutral-900"
                        // className="relative w-full h-full color-bg-details-third flex items-center justify-center"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                    >
                        <img
                            src="/test/preview.png"
                            className="w-[50%] h-[50%] object-cover"
                            alt="Screenshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CentralDiamond;
