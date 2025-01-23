import React from 'react';
import './Explore.css';
import { product_category_list } from '../../data';

const Explore = ({category, setCategory}) => {
  return (
    <div>
      <div className="explore_menu">
        <h1>Explore our products</h1>
        <p className="text">
          Explore our wide range of furniture and find the perfect pieces to express your unique style. Whether you are looking to
          furnish your living room, bedroom, dining area, or office, we have something that suits every taste and need.
        </p>
        <div className="menu_list">
          {product_category_list.map((item, index) => {
            return (
              <div onClick={() => setCategory((prev) => (prev === item.product_name ? "ALL" : item.product_name))} 
              key={index} className="menu_list_item">
                <div className={category === item.product_name ? "active" : ""}>
                  <h2>{item.product_icon}</h2>
                  <p>{item.product_name}</p>
                </div>
              </div> 
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Explore;
