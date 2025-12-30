import MainPage from "../pages/MainPage.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectList from "../pages/ProjectList.jsx";
import ExperienceList from "../pages/ExperienceList.jsx";
import Experiences from "../pages/Experiences.jsx";
import SkillsList from "../pages/SkillsList.jsx";
import Skills from "../pages/Skills.jsx";
import Education from "../pages/Education.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import NotFound from "../pages/NotFound.jsx";

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
        element: <SkillsList />,
    },
    {
        path: "/skills/:id",
        element: <Skills />,
    },
    {
        path: "/education",
        element: <Education />,
    },
    {
        path: "/aboutme",
        element: <AboutMe />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
