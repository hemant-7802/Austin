import React, { Fragment, useEffect } from 'react'
import ProductCard from './ProductCard'
import { CgMouse } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import "./home.css"
import MetaData from '../layouts/MetaData';
import { getProduct } from '../../action/productAction';
import Loader from '../layouts/loader/Loader';

const Home = () => {
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products.products);
  const { loading } = useSelector((state) => state.products)
  
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch, error])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
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
    </Fragment>
  )
}

export default Home
