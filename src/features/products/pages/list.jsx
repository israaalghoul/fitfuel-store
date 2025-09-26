import { ProductList } from '../components/product-list';
import { Container } from '../../../shared/components/container';
function ProductListPage() {
    return (
        <Container >
            <div className="product-section-title">
                <h3 style={{ fontSize: "2.0rem"}}>All products</h3>
            </div>
            <ProductList />
        </Container>
    )
}

export default ProductListPage;