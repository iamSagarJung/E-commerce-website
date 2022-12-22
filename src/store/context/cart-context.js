import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const initalState = {
  noOfItems:1,
  price:0,
  cart:[]
};

const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initalState);

    // increase number of items
    const increment=()=>{
      dispatch({type:"INCREMENT"})
  }
    // decrease number of items
  const decrement=()=>{
      dispatch({type:"DECREMENT"})
  }

    const addToCart=()=>{
      dispatch({type:"ADD_TO_CART"})
    }

    const removeFromCart=(id)=>{
      dispatch({type:"REMOVE_FROM_CART",payload:id})
    }


  return <CartContext.Provider value={{...state,increment,decrement,addToCart,removeFromCart}}>
    {children}
    </CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
