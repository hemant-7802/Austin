import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layouts/MetaData'
import { useSelector, useDispatch } from "react-redux";
import Carousel from 'better-react-carousel'
import { getProductDetails } from '../../action/productAction';
import Loader from '../layouts/loader/Loader';
import { useParams } from 'react-router-dom'
import "./productDetails.css"

const ProductDetails = ({ match }) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { product, loading, error } = useSelector((state) => state.productDetails)

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock < quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    // alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [dispatch, id, error])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- AUSTIN-Store`} />
          <div className="productDetails">
            <div>
              <Carousel cols={1} rows={1} loop hideArrow={true} autoplay={true} showDots={true}>
                <Carousel.Item>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel.Item>
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>

              <div className="detailsBlock-2">
                {/* <Rating {...options} /> */}
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status: <b style={{color: `${product.stock < 1 ? 'red' : 'green'}`}}>
                    {product.stock < 1 ? "OutOfstock" : "Instock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </>
  )
}

export default ProductDetails
