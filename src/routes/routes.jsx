import MainPage from "../pages/MainPage.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectList from "../pages/ProjectList.jsx";
import ExperienceList from "../pages/ExperienceList.jsx";
import Experiences from "../pages/Experiences.jsx";

const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/projects",
        element: <ProjectList />,
    },
    {
        path: "/projects/:id",
        element: <Projects />,
    },
    {
        path: "/experience",
        element: <ExperienceList />,
    },
    {
        path: "/experience/:id",
        element: <Experiences />,
    },
    {
        path: "/skills",
        // element: <Skills />,
    },
    {
        path: "/aboutme",
        // element: <AboutMe />,
    },
    {
        path: "/contact",
        // element: <Contact />,
    },
    {
        path: "/downloadcv",
        // element: <Contact />,
    },
];

export default routes;
