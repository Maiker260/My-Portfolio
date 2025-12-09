function EducationInfo({ optionSelected }) {
    const { area, institution, certificate, description } = optionSelected;

    const infoItems = [
        { label: "Type", value: area },
        { label: "Institution", value: institution },
        { label: "Certification", value: certificate },
        { label: "Description", value: description },
    ].filter((item) => item.value != null);

    return (
        <section className="font-skipstdb flex flex-col gap-6 w-full m-auto pt-6 pb-40 md:max-w-[30vw]">
            {infoItems.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-3xl color-text-details-fourth">
                        {label}
                    </h3>
                    <li className="text-lg md:text-xl ml-10">{value}</li>
                </div>
            ))}
        </section>
    );
}

export default EducationInfo;
