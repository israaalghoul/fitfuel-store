import { useCart } from "../../../features/products/store/cart";
import { Btn } from "../../components/btn";
import "./style.css";

export default function CartSidebar() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalPrice,
    isOpen,
    closeCart,
  } = useCart();

  if (!isOpen) return null;

  return (<>
      <div className="cart-sidebar-overlay" onClick={closeCart}></div>
      <aside className="cart-sidebar">
      <div className="cart-sidebar-header">
        <h2>Shopping Cart</h2>
        <Btn classNameBtn={"btn btn-close"}  onClick={closeCart} btnName={<img src="/public/images/icones/close-svgrepo-com.svg" alt="close icon" width="15" />} />
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">No products in the cart.</p>
      ) : (
        <>

          <div className="cart-items">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="item-info">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                  </div>
                  <div className="control-product">
                    <Btn classNameBtn={'btn'} onClick={() => decreaseQty(item.id)} btnName={<img src="/public/images/icones/decrease-icon-svgrepo-com.svg" alt="close icon" width="10" />}/>
                    <span>{item.quantity}</span>
                    <Btn classNameBtn={'btn'} onClick={() => increaseQty(item.id)} btnName={ <img src="/public/images/icones/add-svgrepo-com.svg" alt="close icon" width="15" />}/>
                    <div className="price-item">
                      Price: {(() => {
                        const priceNum = Number(item.price.replace(/[^\d.]/g, ""));
                        const unit = Number.isFinite(priceNum) ? Math.ceil(priceNum) : priceNum;
                        const total = Number.isFinite(unit) ? unit * item.quantity : item.price;
                        return typeof total === 'number' ? `${total} $` : item.price;
                      })()}
                    </div>
                    <Btn classNameBtn={"btn btn-remove"}  onClick={() => removeFromCart(item.id)} btnName={<img src="/public/images/icones/close-svgrepo-com.svg" alt="close icon" width="15" />} />

                      
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-sidebar-footer">
            <h3>
              Total price: <span id="total-price"> {(() => {
                const sum = cart.reduce((acc, it) => {
                  const p = Number(it.price.replace(/[^\d.]/g, ""));
                  const unit = Number.isFinite(p) ? Math.ceil(p) : p;
                  return acc + (Number.isFinite(unit) ? unit * it.quantity : 0);
                }, 0);
                return sum;
              })()} $ </span>
            </h3>

            <Btn
              btnName="Clear cart"
              classNameBtn={"btn btn-clear"}
              onClick={clearCart}
            />
          </div>
        </>
      )}
    </aside>
  </>
    
  );
}
