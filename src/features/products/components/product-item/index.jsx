import {Btn} from "../../../../shared/components/btn"
import { useCart } from '../../store/cart';
import { toast } from 'react-toastify';
import "./style.css";
 
export function ProductItem({ title, price, image, id }) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    toast.success('Porduct add successfully')
    addToCart({
      id,
      name: title,
      image,
      price,
    });
  };


  return (
    <div className="product-item">
      <img className="product-item-img" src={image} alt={title} />
      <div className="product-item-details">
        <p className="product-item-title">{title}</p>
        <p className="product-item-price">{price}</p>
        <Btn classNameBtn={"btn"} btnName="Add to cart"  onClick={handleAddToCart} />
      </div>
    </div>
  );
}
