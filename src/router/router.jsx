import { createBrowserRouter } from "react-router-dom"
import UserPage from "../pages/UserPage";
import AboutPage from "../pages/AboutPage";
import Root from "../pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/users/:id",
                element: <UserPage />
            }
        ]
    },
]);

export default router;