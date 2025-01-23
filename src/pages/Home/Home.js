import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Explore from '../../Components/Explore/Explore'
import ProductList from "../../Components/ProductList/ProductList"; 

const Home = () => {

    const [category, setCategory] = useState("All");
  return (
    <>
    <div>
      <Hero/>
      <Explore category={category} setCategory={setCategory}/>
      <ProductList category={category} />
    </div>
    </>
  )
}

export default Home
