import ReferenceOption from "./references/ReferenceOption.jsx";
import { creatorData } from "../../services/data/creatorData.js";

export default function ReferencesModal({ openModal, setOpenModal }) {
    const references = creatorData["references"];

    return (
        <>
            {openModal && (
                <section className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-hidden">
                    <div className="w-[60%] h-[80%] rounded-2xl p-8 relative overflow-auto">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:scale-110"
                        >
                            ✕
                        </button>

                        <main className="flex flex-col h-full">
                            <h2 className="text-center text-2xl text-white lg:text-5xl font-bold mb-4">
                                REFERENCES
                            </h2>

                            <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-2">
                                {references.map((item, idx) => (
                                    <ReferenceOption
                                        key={idx}
                                        index={idx + 1}
                                        total={references.length}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </main>
                    </div>
                </section>
            )}
        </>
    );
}
