import { useState } from "react";
import EducationListOption from "./EducationListOption.jsx";

function EducationList() {
    const [optionSelected, setOptionSelected] = useState(
        "High School Diploma in Dos Cercas no se."
    );

    const dummyData = [
        {
            date: "2024-2027",
            institution: "Dos Cercas High School",
            status: "In Progress",
        },
        {
            date: "2023-2026",
            institution: "Dos Cercas High School",
            status: "Completed",
        },
        {
            date: "2022-2025",
            institution: "Dos Cercas High School",
            status: "Completed",
        },
    ];

    return (
        <article className="absolute top-[30%] left-[5%] flex flex-col gap-20 w-full max-w-[55vw] text-white font-skipstdb">
            <div className="flex flex-col gap-1 text-lg italic">
                <div className="flex select-none text-center">
                    <span className="flex-[1]">Date</span>
                    <span className="flex-[2]">Institution</span>
                    <span className="flex-[1]">Status</span>
                </div>
                <ul className="list-none">
                    {dummyData.map((item, index) => (
                        <EducationListOption key={index} item={item} />
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-4 ml-30">
                <h3 className="text-3xl color-text-details-fourth">Info</h3>
                <li className="text-xl ml-5">{optionSelected}</li>
            </div>
        </article>
    );
}

export default EducationList;
