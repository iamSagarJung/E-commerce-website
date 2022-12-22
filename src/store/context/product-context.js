import { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from "../reducer/productReducer"
const api="https://fakestoreapi.com/products"

const ProductContext=createContext()

const initialState={
    allProduct:[],
    isLoading:false,
    productDetail:{},
}

export const ProductProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

    // fetching data
    const fetchedData=async (url)=>{
        dispatch({type:"SET_LOADING"})
        const response=await fetch(url)
        const data=await response.json()
        console.log(data[0].title.toLowerCase())
        dispatch({type:"GET_PRODUCTS_DATA",payload:data})
    }

    // get single product
    const getProductDetails=async (url)=>{
        dispatch({type:"SET_LOADING"})
        const response=await fetch(url)
        const productDetail=await response.json()
        dispatch({type:"GET_SINGLE_PRODUCT",payload:productDetail})
    }



    const sortCategory=(e)=>{
        dispatch({type:"SORT_CATEGORY",payload:e.target.textContent})
       }

    useEffect(() => { 
      fetchedData(api)
    }, [])

    // useEffect(()=>{
    //     sortCategory()
    // },[])

    return <ProductContext.Provider value={{...state,getProductDetails,sortCategory}}>
        {children}
    </ProductContext.Provider>
}

export const useProductContext=()=>{
    return useContext(ProductContext)
}
