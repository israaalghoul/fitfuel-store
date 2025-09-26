import { appRoutes } from '../../../routes'
import { lazy } from 'react'

const FeaturedPage = lazy(() => import('../pages'))

export const featuredRoutes = [
    {
        path: appRoutes.featured,
        element: <FeaturedPage />,
    },
]