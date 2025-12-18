function MenuItemHoverEffect({ size, index, name }) {
    const triangleStyle = {
        width: `${size.width + 60}px`,
        height: `${size.height + 60}px`,
        clipPath: "polygon(100% 40%, 0 71%, 63% 96%)",
        WebkitClipPath: "polygon(100% 40%, 0 71%, 63% 96%)",
    };

    const innerTriangleStyle = {
        width: `${size.width + 30}px`,
        height: `${size.height + 30}px`,
        clipPath: "polygon(100% 40%, 0 71%, 63% 96%)",
        WebkitClipPath: "polygon(100% 40%, 0 71%, 63% 96%)",
        top: "-50px",
        left: "40px",
    };

    const innerTriangleTWStyle =
        "absolute pointer-events-none bg-menu-select-white";

    return (
        <>
            {/* Triangle in Front */}
            <span
                className="absolute left-6 flex items-center justify-center bg-menu-select-rose z-30 pointer-events-none select-none"
                style={{
                    ...triangleStyle,
                    top: "-70px",
                }}
            >
                {/* Red text (normal size, centered in triangle) and inner triangle */}
                <span
                    className="absolute -left-6 text-5xl text-menu-select-red tracking-[-0.12em] whitespace-nowrap font-rodin pointer-events-none select-none lg:text-[5rem]"
                    style={{
                        top: "70px",
                    }}
                >
                    {name}
                    <span
                        className={`${innerTriangleTWStyle} opacity-90 -z-10 pointer-events-none select-none`}
                        style={{
                            ...innerTriangleStyle,
                        }}
                    />
                </span>
            </span>
        </>
    );
}

export default MenuItemHoverEffect;
