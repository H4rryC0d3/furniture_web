import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const ProductList = ({ category }) => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div className="product" id="shop">
        <div className="product_items">
          {products.map((product) => {
            if (category === "All" || category === product.category) {
              return (
                <Link to={`/product/${product.id}`} key={product.id}> {/* Fixed the Link */}
                  <Product product={product} />
                </Link>
              );
            }
            return null; // Ensure the map always returns something
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
