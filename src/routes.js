import { createBrowserRouter } from "react-router-dom";
import Route from "./components/Route"
import LogIn from "./components/LogIn";
import Register from "./components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Route></Route>,
        children: [
            { path: "/login", element: <LogIn></LogIn> },
            { path: "/register", element: <Register></Register> }
        ]
    }
])
export default router;