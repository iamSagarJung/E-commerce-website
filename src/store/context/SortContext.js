import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer/SortReducer";
import { useProductContext } from "./product-context";

const SortContext=createContext()

const initialState={
    products:[],
    filterProducts:[],
}
export const SortProvier=({children})=>{

   const [state, dispatch] = useReducer(reducer,initialState)
   const {allProduct}=useProductContext()

   const sortCategory=(e)=>{
   let value=e.target.textContent
    dispatch({type:"SORT_CATEGORY",payload:value})
    
   }


   useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload:allProduct})
   },[allProduct])

    return <SortContext.Provider value={{...state,sortCategory}}>
        {children}
    </SortContext.Provider>
}


export const useSortContext=()=>{
    return useContext(SortContext)
} 