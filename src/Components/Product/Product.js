import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rp.{product.price}</p>
      <button>View Details</button>
    </div>
  );
};

export default Product;
