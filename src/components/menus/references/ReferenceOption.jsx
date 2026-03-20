export default function ReferenceOption({ index, total, item }) {
    const { section, url, refType } = item;
    const MOONPHASES = 8;
    const moonIndex = ((index - 1) % MOONPHASES) + 1;

    return (
        <article className="relative p-4 color-bg-details-eleventh color-text-details-seventh hover:scale-105 hover:cursor-pointer">
            <span className="absolute top-1 left-2 text-2xl">{index}</span>

            <div className="flex items-center gap-1">
                <div className="flex flex-[0.4] justify-center items-center gap-4 ml-3">
                    <p className="text-5xl">
                        {index}/{total}
                    </p>

                    {/* Triangle */}
                    <svg
                        viewBox="0 0 24 16"
                        fill="currentColor"
                        className="w-10 h-10 block"
                    >
                        <path d="M0 0 L12 20 L24 0 Z" />
                    </svg>
                    <p className="text-2xl">{refType}</p>

                    {/* Moon Phase */}
                    <img
                        width="86"
                        height="86"
                        src={`/other/references/moonPhases/${moonIndex}.webp`}
                        alt="full-moon"
                    />
                </div>

                <div className="flex flex-col flex-[0.6] min-w-0">
                    <h4 className="text-2xl p-1 px-4 bg-black text-white">
                        {section}
                    </h4>
                    <p className="text-xl px-6">{url}</p>
                </div>
            </div>
        </article>
    );
}
