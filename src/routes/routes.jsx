import MainPage from "../layouts/MainPage.jsx";
import Projects from "../layouts/Projects.jsx";

const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    // ADD THE PROJECT LIST SELECTOR
    {
        path: "/projects/:id",
        element: <Projects />,
    },
];

export default routes;
