function EducationListOptionMobile({
    item,
    optionSelected,
    setOptionSelected,
}) {
    const containerColor =
        optionSelected == item ? "bg-red-500" : "color-bg-details-tenth";

    const titleColor =
        optionSelected == item ? "text-neutral-800" : "text-white";

    const backgroundColor =
        optionSelected == item ? "bg-white" : "color-bg-details-tenth";

    const dataColor =
        optionSelected == item
            ? "text-neutral-800"
            : "color-text-details-fourth";

    return (
        <div
            className={`pt-2 rounded-md ${containerColor}`}
            onClick={() => setOptionSelected(item)}
        >
            <div
                className={`flex flex-col gap-1 p-2 rounded-md ${backgroundColor}`}
            >
                <div className="flex justify-between">
                    <span className={`font-bold italic ${titleColor}`}>
                        Date:
                    </span>
                    <span className={`${dataColor} font-skipstdb`}>
                        {item.date}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={`font-bold italic ${titleColor}`}>
                        Field:
                    </span>
                    <span className={`break-all ${dataColor} font-skipstdb`}>
                        {item.field}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={`font-bold italic ${titleColor}`}>
                        Status:
                    </span>
                    <span
                        className={`px-2 py-1 rounded-sm ${
                            item.status === "In Progress"
                                ? "bg-green-400"
                                : "color-bg-details-seventh"
                        } color-text-details-sixth font-skipstdb`}
                    >
                        {item.status}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default EducationListOptionMobile;
