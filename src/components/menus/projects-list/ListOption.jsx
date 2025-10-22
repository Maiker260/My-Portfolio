function ListOption({ project, index }) {
    const { name, type } = project;

    return (
        <div
            className={`relative flex flex-col w-full h-10 group hover:cursor-pointer`}
            style={{ marginLeft: `${index * 6}px` }}
        >
            {/* External Container used for Hover */}
            <div
                className={"w-full h-full group-hover:bg-red-500"}
                style={{
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            ></div>
            {/* Inner Container */}
            <div
                className=" absolute top-0 -left-1 w-full h-fit mr-2 mt-1 bg-green-500 group-hover:bg-white group-hover:text-black"
                style={{
                    clipPath: "polygon(0 0, 99% 0, 100% 100%, 1% 100%)",
                }}
            >
                <div>
                    <div>{name}</div>
                    <div>{type}</div>
                </div>
            </div>
        </div>
    );
}

export default ListOption;
