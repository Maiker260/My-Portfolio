function Header({ skill, classname }) {
    return (
        <header>
            <h1
                className={`text-6xl text-white font-rodin tracking-[-0.08em] ${classname}`}
            >
                {skill.toUpperCase()}
            </h1>
        </header>
    );
}

export default Header;
