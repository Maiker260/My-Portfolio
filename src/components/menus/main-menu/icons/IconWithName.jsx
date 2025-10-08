function IconWithName({ icon: IconComponent, name }) {
    const isLinkedin = name === "LinkedIn" ? "px-3" : "px-5";

    return (
        <div className="flex flex-col relative cursor-pointer group hover:scale-110">
            <div className="w-20 h-20 p-2 shrink-0 grow-0 flex items-center justify-center rounded-full border-3 border-menu-blue bg-menu-blue-icons relative group-hover:text-menu-cyan-main">
                <IconComponent />
                {/* Cover the border where the text box will touch it */}
                <div className="absolute bottom-1 right-1_5 w-11 h-2 bg-menu-blue-icons rotate-[-20deg] z-20"></div>
            </div>
            <div
                className={`font-rodin border-3 border-menu-blue p-1 ${isLinkedin} absolute -right-5 -bottom-7 -rotate-20 bg-menu-blue-icons text-white group-hover:text-menu-cyan-main`}
            >
                <span className="">{name}</span>
            </div>
        </div>
    );
}

export default IconWithName;
