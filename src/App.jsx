import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { MainPageContext } from "./context/mainPageContext.jsx";

const router = createBrowserRouter(routes);

export default function App() {
    const [backHomeTransition, setBackHomeTransition] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);

    const home = {
        backHomeTransition,
        setBackHomeTransition,
        currentPage,
        setCurrentPage,
    };

    return (
        <MainPageContext.Provider value={home}>
            <RouterProvider router={router} />
        </MainPageContext.Provider>
    );
}
