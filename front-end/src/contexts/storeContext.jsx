import { createContext, useState} from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Calculate total items in the cart
  const totalCartCount = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id]; 
      return updatedCart;
    });
  };

  const updateCartQuantity = (id, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  };

  return (
    <StoreContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity, totalCartCount }}>
      {children}
    </StoreContext.Provider>
  );
};



export default StoreProvider;
