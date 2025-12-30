function IconWithName({ icon: IconComponent, name }) {
    const paddingClass = name === "LinkedIn" ? "px-3" : "px-5";

    return (
        <div className="w-full flex flex-col relative cursor-pointer group lg:rotate-5 hover:scale-105 ">
            <div className="relative w-20 h-20 p-2 flex items-center justify-center shrink-0 grow-0 rounded-full border-3 border-menu-blue bg-menu-blue-icons-gradient group-hover:color-select-icons">
                <IconComponent
                    className={"rounded w-[85%] h-[85%] lg:-rotate-20"}
                />

                {/* Cover the border where the text box will touch it */}
                <div className="absolute bottom-0 w-11 h-2 rounded-t-[25%] bg-menu-blue-icons z-20 lg:bottom-1 lg:right-1 lg:rotate-[-20deg]"></div>
            </div>

            <div
                className={`absolute -right-3 -bottom-7 p-1 ${paddingClass} border-3 border-menu-blue bg-menu-blue-icons color-text-details-main font-rodin lg:-right-25 lg:-bottom-7 lg:-rotate-20 group-hover:text-menu-cyan-main`}
            >
                <span className="">{name}</span>
            </div>
        </div>
    );
}

export default IconWithName;
