function EducationListOption({ item, setOptionSelected }) {
    return (
        <li
            className="flex pt-2 text-black text-xl rounded-sm group hover:bg-red-500 hover:cursor-"
            onMouseEnter={() => setOptionSelected(item)}
            onMouseLeave={() => setOptionSelected(null)}
        >
            <div className="flex w-full p-2 text-center color-text-details-fourth group-hover:bg-white group-hover:text-black rounded-sm">
                <span className="flex-[1]">{item.date}</span>
                <span className="flex-[2]">{item.field}</span>
                <div className="flex-[1]">
                    <span
                        className={`w-full max-w-[30%] py-1 px-3 font-bold rounded-sm ${
                            item.status === "In Progress"
                                ? "bg-green-500"
                                : "color-bg-details-seventh"
                        } color-text-details-sixth select-none group-hover:bg-black group-hover:text-white`}
                    >
                        {item.status}
                    </span>
                </div>
            </div>
        </li>
    );
}
export default EducationListOption;
