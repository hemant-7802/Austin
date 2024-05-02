import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import { CgMouse } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import "./home.css"
import MetaData from '../layouts/MetaData';

const products = [{
  name: "tshirt",
  _id: "asdai2",
  price: "3000"
}]

const Home = () => {
  // const products = useSelector((state) => state.products);
  return (
    <Fragment>
      <MetaData title="AUSTIN" />

      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </Fragment>
  )
}

export default Home
