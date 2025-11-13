function EducationListOption({ item }) {
    return (
        <li className="flex pt-2 text-black text-xl rounded-sm group hover:bg-red-500 hover:cursor-pointer">
            <div className="flex w-full p-2 text-center color-text-details-fourth group-hover:bg-white group-hover:text-black rounded-sm">
                <span className="flex-[1]">{item.date}</span>
                <span className="flex-[2]">{item.institution}</span>
                <div className="flex-[1]">
                    <span className="w-full max-w-[30%] py-1 px-3 rounded-sm color-bg-details-seventh color-text-details-sixth group-hover:bg-black group-hover:text-white">
                        {item.status}
                    </span>
                </div>
            </div>
        </li>
    );
}
export default EducationListOption;
