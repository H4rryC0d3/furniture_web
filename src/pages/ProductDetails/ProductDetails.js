import React, { useContext } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Components/ProductContext/ProductContext";
import { product_list } from "../../data";
import { FaShippingFast } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoStar, IoStarHalf } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ProductContext); 
  const product = product_list.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); 
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product_details">
      <div className="details_top">
        <div className="details_left">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details_right">
          <h2 className="name">{product.name}</h2>
          <hr />
          <p>{product.productDetail?.description}</p>
          <h2 className="price">Price: Rp.{product.price}</h2>
          <p className="shipping">
            <FaShippingFast className="truck" />
            <span>Free Shipping & Returns:</span> {product.productDetail?.shipping}
          </p>
          <p className="delivery">
            <CiDeliveryTruck className="truck" />
            <span>Estimated Delivery: </span> {product.productDetail?.delivery}
          </p>
          <div className="star-icons">
            <IoStar className="star_icon" />
            <IoStar className="star_icon" />
            <IoStar className="star_icon" />
            <IoStar className="star_icon" />
            <IoStarHalf className="star_icon" />
          </div>
          <div className="btn">
            <button onClick={handleAddToCart}>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="product_description">
        <h2>Product Details</h2>
        <hr />
        <p>{product.productDetail?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
