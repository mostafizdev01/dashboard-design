import App from "@/App";
import Appointments from "@/components/dashboard/Appointments";
import CallLogs from "@/components/dashboard/Calls";
import Home from "@/components/dashboard/Home";
import Settings from "@/components/dashboard/Settings";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/call-logs",
                Component: CallLogs
            },
            {
                path: "/appointments",
                Component: Appointments
            },
            {
                path: "/settings",
                Component: Settings
            }
        ]
    },
    {
        path: "/about",
        element: "This is about route"
    },

])