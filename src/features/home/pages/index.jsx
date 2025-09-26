import { ProductsSection } from "../../products/components/products-section";
import { FeaturedSection } from "../../featured/components";
import { HeroSection } from "../components/hero-section";


function HomePage() {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <FeaturedSection />
        </>
    )
}

export default HomePage;