import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItem");
  if (localCartData) {
    return JSON.parse(localCartData)
  } else {
    return [];
  }
};

const initalState = {
  price: 0,
  cart: getLocalCartData(),
  totalPrice: 0,
  totalNoOfItems: 0,
  shippingFee: 0,
  discountedPrice: 0,
  promoValue: "",
  isPromoValid: false,
  isTouched: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  // increase number of items
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  // decrease number of items
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };
  const addToCart = (id, amount, productDetail) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, productDetail } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const promoSubmitHandler = () => {
    dispatch({ type: "DISCOUNT_PRICE" });
  };

  const handleChange = (e) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
    dispatch({ type: "TOTAL_PRICE" });
    dispatch({ type: "TOTAL_ITEMS" });
    dispatch({ type: "SHIPPING_CHARGE" });
    promoSubmitHandler();
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        increment,
        decrement,
        addToCart,
        removeFromCart,
        promoSubmitHandler,
        handleChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
