import { Container } from "../../../../shared/components/container";
import { Btn } from "../../../../shared/components/btn";
import { appRoutes } from "../../../../routes";
import { ProductList } from "../product-list";
import "./style.css";


export function ProductsSection() {
  return (
    <>
      <div className="product-section">
        <Container>
          <div className="product-section-header">
            <h2>Get Fit in Style with Fitfuel</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              libero quaerat iusto quae aut? Aut esse provident mollitia saepe
              architecto nostrum rem ab debitis, animi in, ea quaerat nulla
              dolorem.
            </p>
          </div>
          <div className="product-section-title">
            <h3>New Products</h3>
            <Btn classNameBtn={"btn"} btnName="See more" route={appRoutes.products.list} />
          </div>
          
          <ProductList limit={4} />
        </Container>
      </div>
    </>
  );
}
