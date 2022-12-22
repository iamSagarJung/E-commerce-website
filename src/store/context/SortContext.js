import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/SortReducer";
import { useProductContext } from "./product-context";

const SortContext=createContext()

const initialState={
    allproducts:[],
    filterProducts:[],
    category:"all",
}
export const SortProvier=({children})=>{

   const [state, dispatch] = useReducer(reducer,initialState)
   const {allProduct}=useProductContext()

   const sortCategory=(e)=>{
   let value=e.target.textContent
    dispatch({type:"SORT_CATEGORY",payload:value})
   }

   const handleSearch=(e)=>{
    dispatch({type:"SEARCH_PRODUCTS",payload:e.target.value})
   }

   const handlePrice=(e)=>{
    dispatch({type:"SORT_BY_PRICE",payload:e.target.value})
   }

   const handleClear=()=>{
    dispatch({type:"CLEAR_FILTER",payload:allProduct})
   }

   useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload:allProduct})
   },[allProduct])

    return <SortContext.Provider value={{...state,sortCategory,handleSearch,handlePrice,handleClear}}>
        {children}
    </SortContext.Provider>
}


export const useSortContext=()=>{
    return useContext(SortContext)
} 