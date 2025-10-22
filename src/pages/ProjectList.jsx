import List from "../components/menus/projects-list/List.jsx";

function ProjectList() {
    return (
        <div className="relative min-h-screen overflow-hidden color-bg-details-third-gradient-top font-rodin">
            <div
                className="min-h-screen overflow-hidden color-bg-details-third"
                style={{
                    clipPath:
                        "polygon(70% 0, 100% 0, 100% 45%, 65% 100%, 0 100%, 0 97%)",
                }}
            />
            <List
                className={
                    "absolute top-[15%] left-[4%] h-[80%] w-[40vw] border-3 z-50 p-4 origin-top-left"
                }
            />
        </div>
    );
}

export default ProjectList;
