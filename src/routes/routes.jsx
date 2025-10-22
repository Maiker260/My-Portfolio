import MainPage from "../pages/MainPage.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectList from "../pages/ProjectList.jsx";

const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/projects/",
        element: <ProjectList />,
    },
    {
        path: "/projects/:id",
        element: <Projects />,
    },
];

export default routes;
