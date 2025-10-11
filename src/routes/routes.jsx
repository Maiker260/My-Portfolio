import MainPage from "../layouts/MainPage.jsx";
import Projects from "../layouts/Projects.jsx";

const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
];

export default routes;
