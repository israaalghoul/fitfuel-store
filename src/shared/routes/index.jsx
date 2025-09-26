import { lazy } from "react"

const SidebarPage = lazy(() => import('../pages/sidebar'));

export const authRoutes = [
    {
        path: "/sidebar",
        element: (
            <SidebarPage />
        ),
    },
]