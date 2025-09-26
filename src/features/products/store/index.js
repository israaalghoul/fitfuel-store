import { productInitState } from './state'
import { create } from 'zustand'

export const useProductsState = create((setState) => ({
    ...productInitState,
    setSelectedProduct: (product) => setState((state) => ({
        ...state,
        selectedProduct: product,
    })),
    setProducts: (response) => {
        setState((state) => {
            return {
                ...state,
                products: response,
            }
        })
    },
}))