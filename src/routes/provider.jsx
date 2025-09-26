import { createBrowserRouter, RouterProvider } from "react-router";
import { DefaultLayout } from "../shared/layout/default-layout";
import { homeRoutes } from '../features/home/routes'
import { productsRoutes } from '../features/products/routes'
import { authRoutes } from '../features/auth/routes'
import { featuredRoutes } from '../features/featured/routes'
import { appRoutes } from ".";

const router = createBrowserRouter([
    {
        path: appRoutes.home,
        element: <DefaultLayout />,
        children: [
            ...homeRoutes,
            ...productsRoutes,
            ...featuredRoutes,
            ...authRoutes,
        
            {
                path: '*',
                element: <h1>404 not found</h1>,
            }
        ]
    }
]);

export function AppRouterProvider() {
    return (
        <RouterProvider router={router} />
    )
}