import React from "react";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../store/context/product-context";
import Price from "./helpers/Price";
import StarRating from "./helpers/StarRating";
import Loading from "./Loading";

const AllProducts = () => {
  const { allProduct, isLoading } = useProductContext();

  if (isLoading) {
    return <Loading/>;
  }
  return (
    <>
      <div className="m-6 columns  is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center is-align-items-center">
        {allProduct.map((product) => {
          const { id, title, price, image, rating, category } = product;
          const dPrice = price + (20 / 100) * price;

          return (
            <NavLink to={`/product/${id}`} key={id}>
              <div className="column all-product ">
                <div className=" card p-1">
                  <section className="card-image  is-flex  is-hoverable is-justify-content-center is-align-items-center">
                    <figure className="image is-64x64 ">
                      <img src={image} alt={title} className="" />
                    </figure>
                  </section>
                  <hr />
                  <div className="px-3 product-content">
                    <section className="product-heading">
                      <h1 className="is-size-7 product-title  has-text-weight-bold">
                        {title.slice(0, 25)}...
                      </h1>
                      <p className="has-text-grey-lighter is-size-7 category  ">
                        {category}
                      </p>
                    </section>
                    <div>
                      <StarRating rating={rating.rate} />
                      <span className="category has-text-grey is-size-7">
                        {" "}
                        ({rating.count})
                      </span>
                    </div>
                    <div>
                      <span className="is-size-6 has-text-success has-text-weight-semibold">
                        <Price price={price} />
                      </span>
                      <span className="is-flex is-justify-content-space-between">
                        <s className="is-size-7 has-text-grey has-text-weight-bold">
                          {" "}
                          <Price price={dPrice} />
                        </s>
                        <p className="is-size-7 has-text-danger-dark has-text-weight-bold">
                          20% off
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
