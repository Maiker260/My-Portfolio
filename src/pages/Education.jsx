import EducationList from "../components/menus/education/EducationList.jsx";
import NavigationSection from "../components/menus/NavigationSection.jsx";
import Intro from "../components/menus/education/animations/Intro.jsx";

function Education() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden color-bg-details-third-gradient-top">
            {/* Big White Parallelogram */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-[3%] w-[107%] h-[107%]"
            >
                <polygon points="1,19 59,0 79,100 11,100" fill="white" />
            </svg>

            {/* Big Blue Parallelogram */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute -inset-[1%] w-[101%] h-[101%]"
            >
                <polygon
                    points="0,20 60,0 80,100 10,100"
                    className="color-icons-tenth"
                />
                <text
                    x="5"
                    y="25"
                    fill="#FFF"
                    fontFamily="Rodin, sans-serif"
                    fontWeight="bold"
                    fontSize="7"
                    transform="rotate(-18 5 18)"
                    letterSpacing="-0.13em"
                    className="select-none"
                >
                    EDUCATION
                </text>
            </svg>

            <main className="relative z-10 min-h-screen flex items-center justify-center">
                <EducationList />
                <NavigationSection
                    className={"absolute bottom-8 right-3"}
                    hasText
                    description={"Which Info do you want to view?"}
                    backTo={"/"}
                    parentSection={"Education"}
                />
            </main>
        </div>
    );
}

export default Education;
