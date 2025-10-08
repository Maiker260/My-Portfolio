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
        "absolute pointer-events-none hover-bg-menu-white-select";

    return (
        <>
            {/* Back Triangle */}
            <span
                className={innerTriangleTWStyle}
                style={{
                    ...innerTriangleStyle,
                    zIndex: 20 - index * 2 - 1,
                }}
            />

            {/* Triangle in Front */}
            <span
                className="absolute left-6 flex items-center justify-center pointer-events-none z-30 hover-bg-menu-rose-select"
                style={{
                    ...triangleStyle,
                    top: "-70px",
                }}
            >
                {/* Red text (normal size, centered in triangle) and inner triangle */}
                <span
                    className="absolute -left-6 hover-text-menu-red-select text-7_5xl font-rodin tracking-[-0.12em] whitespace-nowrap"
                    style={{
                        top: "70px",
                    }}
                >
                    {name}
                    <span
                        className={`${innerTriangleTWStyle} opacity-70 -z-10`}
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
