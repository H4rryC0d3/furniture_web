import React, { useContext } from 'react';
import './Shop.css'; 
import { ProductContext } from '../../Components/ProductContext/ProductContext';
import Product from '../../Components/Product/Product';

const Shop = () => {
  const { products } = useContext(ProductContext); 

  return (
    <div className="shop-page">
      <h2>Shop All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
