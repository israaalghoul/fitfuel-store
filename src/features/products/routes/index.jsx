import { lazy } from 'react'
import { appRoutes } from '../../../routes'

const ProductsPage = lazy(() => import('../pages'))
const ProductsListPage = lazy(() => import('../pages/list'))

export const productsRoutes = [
  {
    path: appRoutes.products.new,
    element: <ProductsPage />,
  },
  {
    path: appRoutes.products.list,
    element: <ProductsListPage />,
  },
]