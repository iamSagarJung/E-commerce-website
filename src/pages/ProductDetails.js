import React, { useEffect } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Price from "../components/helpers/Price";
import StarRating from "../components/helpers/StarRating";
import Loading from "../components/Loading";
import { useProductContext } from "../store/context/product-context";
const api = "https://fakestoreapi.com/products";

const ProductDetails = () => {
  const { isLoading, productDetail, getProductDetails, increment, decrement,noOfItems } =
    useProductContext();
  const { id } = useParams();
  const { image, price, title, description, rating, category } = productDetail;
  useEffect(() => {
    getProductDetails(`${api}/${id}`);
  }, []);

  // loading is appeared when data is not loaded
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="card  m-6 columns">
        <div className="card-image column is-half">
          <figure className="image is-5by4">
            <img src={image} alt={title} />
          </figure>
        </div>

        <div className="card-content column has-text-weight-bold">
          <p className="has-text-grey-lighter is-size-6 category">{category}</p>
          <h1 className="title is-size-4">{title}</h1>
          {/* <StarRating rating={rating.rate} className="mb"/> */}
          <div className="is-flex my-4">
            <section className="is-size-6 has-text-success has-text-weight-semibold mr-3">
              <Price price={price} />
            </section>
            <span>
              <s className="is-size-7 has-text-grey has-text-weight-bold">
                <Price price={price + (20 / 100) * price} />
              </s>
            </span>
          </div>
          <p className="has-text-grey is-size-7 category has-text-weight-semibold">
            {description}
          </p>
<hr/>
          {/* increase and decrease item button */}
          <p className="has-text-grey">QTY</p>
          
          <div className="mt-1 is-size-4 is-flex  ">
            <span className="mr-4  has-text-grey">
              <AiOutlineMinusCircle onClick={decrement}/>
            </span>
            <p className="is-size-5">{noOfItems}</p>
            <p className="ml-4 has-text-grey">
            <AiOutlinePlusCircle onClick={increment} />
            </p>
          </div>
          <button className="button is-link is-white mt-2 ">add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
