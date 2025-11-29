import { useState } from "react";
import EducationListOption from "./EducationListOption.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import EducationInfo from "./EducationInfo.jsx";

function EducationList() {
    const educationData = creatorData.education;
    const [optionSelected, setOptionSelected] = useState(null);

    return (
        <article className="flex flex-col gap-6 text-white font-skipstdb">
            <div className="flex flex-col gap-1 text-lg italic">
                <div className="flex select-none text-center">
                    <span className="flex-[1]">Date</span>
                    <span className="flex-[2]">Field</span>
                    <span className="flex-[1]">Status</span>
                </div>
                <ul className="list-none">
                    {educationData.map((item, index) => (
                        <EducationListOption
                            key={index}
                            item={item}
                            setOptionSelected={setOptionSelected}
                        />
                    ))}
                </ul>
            </div>
            {optionSelected && (
                <EducationInfo optionSelected={optionSelected} />
            )}
        </article>
    );
}

export default EducationList;
