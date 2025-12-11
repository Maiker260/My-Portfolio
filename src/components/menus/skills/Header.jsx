function Header({ skill, classname }) {
    return (
        <header>
            <h1
                className={`text-2xl text-white font-rodin tracking-[-0.08em] ${classname} md:text-4xl lg:text-5xl xl:text-6xl`}
            >
                {skill.toUpperCase()}
            </h1>
        </header>
    );
}

export default Header;
