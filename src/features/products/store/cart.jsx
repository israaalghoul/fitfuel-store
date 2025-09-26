import { createContext, useContext, useState, useEffect } from 'react';
import { dataStorage } from '../../../lib/storage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const cartStorage = dataStorage('cart');
  const [cart, setCart] = useState(() => {
    const saved = cartStorage.get();
    return Array.isArray(saved) ? saved : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };



  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);
  useEffect(() => {
    cartStorage.set(cart);
  }, [cart]);



  const totalPrice = cart.reduce((sum, item) => {
    const priceNumber = Number(String(item.price).replace(/[^\d.]/g, ""));
    const unit = Number.isFinite(priceNumber) ? Math.ceil(priceNumber) : 0;
    return sum + unit * item.quantity;
  }, 0);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
