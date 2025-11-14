function EducationInfo({ optionSelected }) {
    const infoItems = [
        { label: "Type", value: optionSelected.area },
        { label: "Institution", value: optionSelected.institution },
        { label: "Certification", value: optionSelected.certificate },
        { label: "Description", value: optionSelected.description },
    ].filter((item) => item.value != null);

    return (
        <section className="flex flex-col gap-6 m-auto w-full max-w-[30vw] font-skipstdb">
            {infoItems.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-2">
                    <h3 className="text-3xl color-text-details-fourth">
                        {label}
                    </h3>
                    <li className="text-xl ml-10">{value}</li>
                </div>
            ))}
        </section>
    );
}

export default EducationInfo;
