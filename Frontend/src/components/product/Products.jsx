import React, { Fragment, useEffect } from 'react'
import "./products.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../action/productAction'
import Loader from '../layouts/loader/Loader'
import MetaData from '../layouts/MetaData'
import ProductCard from '../home/ProductCard'

const Products = () => {
  const dispatch = useDispatch()

  const { products, loading, error, productsCount } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch, error])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"PRODUCTS -- Austin-Store"} />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products.products &&
              products.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            {/* <Typography variant='h1'>Price</Typography> */}
            {/* <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            /> */}
            
{/* 
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul> */}

            {/* <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset> */}
          </div>

        </Fragment>
      )
      }
    </Fragment>
  )
}

export default Products
