function IconWithName({ icon: IconComponent, name }) {
    const paddingClass = name === "LinkedIn" ? "px-3" : "px-5";

    return (
        <div className="flex flex-col relative cursor-pointer group hover:scale-105 rotate-5">
            <div className="bg-menu-blue-icons-gradient w-20 h-20 p-2 shrink-0 grow-0 flex items-center justify-center rounded-full border-3 border-menu-blue relative group-hover:text-menu-cyan-main">
                <IconComponent className={"rounded ml-1 -rotate-20"} />

                {/* Cover the border where the text box will touch it */}
                <div className="absolute bottom-1 right-1_5 w-11 h-2 bg-menu-blue-icons rotate-[-20deg] rounded-t-[25%] z-20"></div>
            </div>
            <div
                className={`font-rodin border-3 border-menu-blue p-1 ${paddingClass} absolute -right-25 -bottom-7 -rotate-20 bg-menu-blue-icons color-text-details-main group-hover:text-menu-cyan-main`}
            >
                <span className="">{name}</span>
            </div>
        </div>
    );
}

export default IconWithName;
