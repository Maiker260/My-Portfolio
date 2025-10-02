import ListOption from "./ListOption.jsx";

function List() {
    return (
        <section className="flex flex-col gap-1 ml-20">
            <ListOption name={"PROJECTS"} titleType={"main"} isRotated />
            <div className="ml-20 mt-3 -z-10">
                <ListOption name={"EXPERIENCE"} titleType={"third"} />
            </div>
            <div className="relative -top-5">
                <ListOption name={"SKILLS"} titleType={"sec"} isRotated />
                <ListOption name={"ABOUT ME"} titleType={"main"} isRotated />
            </div>
            <ListOption name={"CONTACT"} titleType={"third"} />
            <ListOption name={"DOWNLOAD RESUME"} titleType={"sec"} isRotated />
        </section>
    );
}

export default List;
