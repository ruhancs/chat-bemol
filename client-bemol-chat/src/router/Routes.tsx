import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/Home";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        children: [
            {path: 'chat', element: <App />}
        ]
    }
]

export const router = createBrowserRouter(routes)