import { createBrowserRouter } from "react-router-dom";

import App from "@app/App";

import EnterPage from "@app/pages/EnterPage"
import GamePage from "@app/pages/GamePage"
import ErrorPage from "@app/pages/ErrorPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <EnterPage />,
            },
            {
                path: "/game",
                element: <GamePage />,
            }
        ]
    }
], { basename: import.meta.env.BASE_URL});
