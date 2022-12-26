import React from "react";
import {
  AiFillDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Price from "../components/helpers/Price";
import { useCartContext } from "../store/context/cart-context";

const Cart = () => {
  const {cart,removeFromCart,increment,decrement}=useCartContext()

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
      {cart.map((item) => {
        const { image, price, title, id,amount } = item;
        return (
          <div  key={id}>
            <div className="columns  mb-6 has-text-centered">
              <div className="column">
                <img
                  src={image}
                  alt={title}
                  style={{ width: "42px", height: "42px" }}
                />
              </div>

              <div className="column">
                <Price price={price} />
              </div>
              <div className="column is-flex is-justify-content-center is-align-items-center ">
                <span className="has-text-grey mr-1 is-size-5 icon">
                  <AiOutlinePlusCircle
                    onClick={()=>increment(id)}
                    className="has-text-success"
                  />
                </span>
                <span className="mr-1">{amount}</span>
                <span className="has-text-grey is-size-5 icon">
                  <AiOutlineMinusCircle
                    onClick={()=>decrement(id)}
                    className="has-text-danger"
                  />
                </span>
              </div>
              <div className="column">
                <Price price={price*amount} />
              </div>
              <p className="column has-text-danger-dark" onClick={()=>removeFromCart(id)}>
                <AiFillDelete />
              </p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
