import React from 'react'
import './Hero.css'
import img from '../../assets/hero-furniture.jpg'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img src={img} alt="" />
        <div className="hero_text">
          <h2>Discover Elegance and Comfort in Every Piece</h2>
          <p>Welcome to Furniture With Zhully, where craftsmanship meets styke. Our collection features exquisite
            furniture designed <br /> to transform your living spaces into a haven of comfort and sophistication.
          </p>
        </div>
        <button>View Products</button>
      </div>
    </div>
  )
}

export default Hero