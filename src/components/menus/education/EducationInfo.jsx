function EducationInfo({ optionSelected }) {
    const { area, institution, certificate, description } = optionSelected;

    const infoItems = [
        { label: "Type", value: area },
        { label: "Institution", value: institution },
        { label: "Certification", value: certificate },
        { label: "Description", value: description },
    ].filter((item) => item.value != null);

    return (
        <section className="font-skipstdb flex flex-col gap-6 w-full m-auto pt-2 pb-3 border-2 border-t-gray-400 lg:border-0 lg:pt-3 lg:pb-0 lg:max-w-[40vw]">
            {infoItems.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-2">
                    <h3 className="text-xl lg:text-2xl text-[#2551ef] lg:text-[#98fcfe]">
                        {label}
                    </h3>
                    <li className="text-lg lg:text-lg ml-10 text-black lg:text-white">
                        {value}
                    </li>
                </div>
            ))}
        </section>
    );
}

export default EducationInfo;
