import { useState } from "react";
import EducationListOption from "./EducationListOption.jsx";
import EducationListOptionMobile from "./EducationListOptionMobile.jsx";
import { creatorData } from "../../../services/data/creatorData.js";
import EducationInfo from "./EducationInfo.jsx";

function EducationList() {
    const educationData = creatorData.education;
    const [optionSelected, setOptionSelected] = useState(null);

    return (
        <article className="flex flex-col gap-6 text-white font-skipstdb">
            {/* Mobile */}
            <ul className="block lg:hidden space-y-4">
                {educationData.map((item, index) => (
                    <EducationListOptionMobile
                        key={index}
                        item={item}
                        optionSelected={optionSelected}
                        setOptionSelected={setOptionSelected}
                    />
                ))}
            </ul>

            {/* Desktop */}
            <div className="hidden lg:block overflow-x-auto">
                <div className="flex flex-col gap-1 text-base italic">
                    <div className="flex select-none text-center">
                        <span className="flex-[1]">Date</span>
                        <span className="flex-[2]">Field</span>
                        <span className="flex-[1]">Status</span>
                    </div>
                    <div className="overflow-x-auto lg:overflow-visible w-full">
                        <ul className="min-w-[500px] list-none">
                            {educationData.map((item, index) => (
                                <EducationListOption
                                    key={index}
                                    item={item}
                                    setOptionSelected={setOptionSelected}
                                    isDesktop
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                {optionSelected && (
                    <EducationInfo optionSelected={optionSelected} />
                )}
            </div>
        </article>
    );
}

export default EducationList;
