import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const initalState = {
  noOfItems:"",
  price:0,
  cart:[],
 totalPrice:'',
  totalAmount:"",
};

const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initalState);

    // increase number of items
    const increment=(id)=>{
      dispatch({type:"INCREMENT",payload:id})
  }
    // decrease number of items
  const decrement=(id)=>{
      dispatch({type:"DECREMENT",payload:id})
  }
    const addToCart=(id,amount,productDetail)=>{
      dispatch({type:"ADD_TO_CART",payload:{id,amount,productDetail}})
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
