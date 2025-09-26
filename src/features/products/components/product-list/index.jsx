import { Loader } from '../../../../shared/components/loader';
import { useQuery } from "@tanstack/react-query";
import ProductsService from '../../services/api';
import { useSearchParams } from "react-router";
import { ProductItem } from "../product-item"
import './style.css'

export function ProductList({ limit } = {}) {
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('q') ?? '';

    const { isLoading, isError, error, data: products = [] } = useQuery({
        queryKey: ['products', searchQuery],
        queryFn: async () => await ProductsService.getAll(searchQuery),
    })

    if (isLoading) {
        return (
            <div className="loader-wrapper">
                <Loader />
            </div>
        )
    }

    if (isError) {
        return (
            <div className='error'>
                <p>{error.message}</p>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className='no-data'>
                <p>
                    No data found
                </p>
            </div>
        )
    }

    const displayed = typeof limit === 'number' ? products.slice(0, limit) : products;

    return (
        <div className="product-list-container">
            {displayed.map(p => (
                <ProductItem
                    key={p.id}
                    title={p.title}
                    price={p.price}
                    image={p.image}
                    id={p.id}
                />
            ))}
        </div>
    )
}