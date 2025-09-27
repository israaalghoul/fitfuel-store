import { useCart } from '../../../products/store/cart';
import "./style.css";

export default function CartBadge() {
  const { cart, openCart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="cart-badge" onClick={openCart} style={{ position: 'relative' }}>
      <img src="/public/images/icones/cart-svgrepo-com.svg" alt="Cart" width="24" />
        <span className="cart-badge-count">
          {count}
        </span>
    </button>
  );
}