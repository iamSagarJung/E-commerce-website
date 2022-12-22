import React from "react";
import { useSortContext } from "../store/context/SortContext";
import {
  AiFillDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Price from "../components/helpers/Price";
import { useProductContext } from "../store/context/product-context";

const Cart = () => {
  const { allproducts } = useSortContext();
  const { increment, decrement, noOfItems } = useProductContext();

  return (
    <div className="mx-6 my-6 has-text-centered">
      <div className="columns">
        <p className="column">Item</p>
        <p className="column">Price</p>
        <p className="column">Quantity</p>
        <p className="column">Total Price</p>
        <p className="column">Remove</p>
      </div>
      <hr />
      {allproducts.map((item) => {
        const { image, price, title, id } = item;
        return (
          <>
            <div className="columns  mb-6 has-text-centered" key={id}>
              <div className="column">
                <img
                  src={image}
                  alt={title}
                  style={{ width: "42px", height: "42px" }}
                />
              </div>

              <p className="column">
                <Price price={price} />
              </p>
              <div className="column is-flex is-justify-content-center is-align-items-center ">
                <span className="has-text-grey mr-1 is-size-5 icon">
                  <AiOutlinePlusCircle
                    onClick={increment}
                    className="has-text-success"
                  />
                </span>
                <span className="mr-1">{noOfItems}</span>
                <span className="has-text-grey is-size-5 icon">
                  <AiOutlineMinusCircle
                    onClick={decrement}
                    className="has-text-danger"
                  />
                </span>
              </div>
              <p className="column">
                <Price price={price} />
              </p>
              <p className="column has-text-danger-dark">
                <AiFillDelete />
              </p>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Cart;
