import { createBrowserRouter } from "react-router-dom";

import EnterPage from '@app/pages/EnterPage'
import ErrorPage from '@app/pages/ErrorPage'
import GamePage from "@app/pages/GamePage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <EnterPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/game",
        element: <GamePage />,
        errorElement: <ErrorPage />
    }
]);
