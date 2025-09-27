import { useCart } from '../../../products/store/cart';
import cartImg from "/public/images/icons/cart.svg";
import "./style.css";

export default function CartBadge() {
  const { cart, openCart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="cart-badge" onClick={openCart} style={{ position: 'relative' }}>
      <img src={cartImg} alt="Cart" width="24" />
        <span className="cart-badge-count">
          {count}
        </span>
    </button>
  );
}