import { Link } from "react-router-dom";
import { OpenInNew } from "../../icons/OpenInNew.jsx";

function JobResponsabilities({ job }) {
    return (
        <div className="flex flex-col items-center gap-6 pb-4 px-4 lg:py-4 lg:px-9">
            <ul className="flex flex-col gap-4 lg:gap-6">
                {job.responsabilities &&
                    job.responsabilities.map((responsability, index) => (
                        <li
                            key={index}
                            className="text-base text-white list-disc text-pretty leading-7 font-skipstdb lg:text-lg xl:text-xl "
                        >
                            {responsability}
                        </li>
                    ))}
            </ul>
            <div className="w-full flex justify-center font-rodin">
                <Link
                    to={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:cursor-pointer"
                >
                    <div className="p-2 color-text-details-third color-bg-details-secund flex gap-2 items-center rounded text-2xl transition group-hover:color-bg-details-fifth">
                        <span className="transition group-hover:text-neutral">
                            More
                        </span>
                        <OpenInNew
                            className={
                                "w-8 h-8 fill-select-icons transition group-hover:color-icons-neutral"
                            }
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default JobResponsabilities;
