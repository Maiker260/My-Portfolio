function ListOption({ name, isRotated, titleType }) {
    const straightOption = isRotated ? "-rotate-17" : "-rotate-2";

    const classes = `text-7_5xl text-(--menu-cyan-third) font-rodin tracking-[-0.12em] ${straightOption}`;

    const style = {
        color: `var(--menu-cyan-${titleType})`,
    };

    return (
        <h2 className={classes} style={style}>
            {name}
        </h2>
    );
}

export default ListOption;
