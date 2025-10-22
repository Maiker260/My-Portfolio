function DiagonalBottomBox() {
    return (
        <section className="relative overflow-hidden color-bg-details-third h-[65vh]">
            {/* Diagonal background */}
            <div
                className="absolute inset-0 color-bg-details-third-gradient-right color-text-details-main overflow-hidden"
                style={{
                    clipPath:
                        "polygon(100% 0, 100% 65%, 42% 100%, 0 100%, 0 44%)",
                }}
            ></div>
        </section>
    );
}

export default DiagonalBottomBox;
