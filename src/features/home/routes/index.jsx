import { lazy } from 'react'
import { appRoutes } from '../../../routes'

const HomePage = lazy(() => import('../pages'))

export const homeRoutes = [
    {
        path: appRoutes.home,
        element: <HomePage />,
    },
]