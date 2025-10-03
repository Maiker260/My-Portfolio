function ListOption({ name, titleType, delay }) {
    return (
        <h2
            className={`text-7_5xl font-rodin tracking-[-0.12em] -rotate-2 w-fit text-menu-cyan-${titleType} opacity-0 animate-[fade-up_600ms_linear_forwards] hover-bg-menu-rose-slc hover:text-neutral-800`}
            style={{ animationDelay: delay }}
        >
            {name}
        </h2>
    );
}

export default ListOption;
