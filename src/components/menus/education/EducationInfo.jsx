function EducationInfo({ optionSelected }) {
    const { area, institution, certificate, description } = optionSelected;

    const infoItems = [
        { label: "Type", value: area },
        { label: "Institution", value: institution },
        { label: "Certification", value: certificate },
        { label: "Description", value: description },
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
