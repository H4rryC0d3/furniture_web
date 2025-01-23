import React, { createContext, useState } from "react";
import { product_list } from "../../data";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products] = useState(product_list);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  return (
    <ProductContext.Provider value={{ products, cartItems, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
