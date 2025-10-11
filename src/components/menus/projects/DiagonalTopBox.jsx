import SkillIconList from "./SkillIconList.jsx";

function DiagonalTopBox() {
    return (
        <section className="relative overflow-hidden color-bg-details-third h-[40vh]">
            {/* Diagonal background */}
            <div
                className="absolute inset-0 color-bg-details-secund color-text-details-main overflow-hidden"
                style={{
                    clipPath: "polygon(0 0, 100% 0%, 100% 16%, 0 100%)",
                }}
            >
                {/* diagonal Border Line */}
                <div
                    className="absolute inset-0 color-bg-details-main"
                    style={{
                        clipPath: "polygon(0 85%, 100% 1%, 100% 16%, 0 100%)",
                    }}
                />

                {/* Rotated text inside the diagonal box */}
                <div className="absolute bottom-23 left-22 transform -rotate-10 origin-top-left">
                    <h1 className="text-7xl color-text-details-secund">
                        BACKEND
                    </h1>
                    <h2 className="mt-12 text-5xl font-bold ">Project Name</h2>
                </div>

                {/* Icons */}
                <div className="absolute inset-0">
                    <SkillIconList />
                </div>
            </div>
        </section>
    );
}

export default DiagonalTopBox;
