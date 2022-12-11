import { createContext, useContext, useEffect, useReducer } from "react"
import { useParams } from "react-router-dom"
import reducer from "../reducer/productReducer"
const api="https://fakestoreapi.com/products"

const ProductContext=createContext()

const initialState={
    allProduct:[],
    isLoading:false,
    productDetail:[]
}

export const ProductProvider=({children})=>{
    const {id}=useParams()
    console.log(id)
    const [state,dispatch]=useReducer(reducer,initialState)

    // fetching data
    const fetchedData=async (url)=>{
        dispatch({type:"SET_LOADING"})
        const response=await fetch(url)
        const data=await response.json()
        dispatch({type:"GET_PRODUCTS_DATA",payload:data})
        dispatch({type:"GET_SINGLE_PRODUCTS",payload:id})

    }

    useEffect(() => { 
      fetchedData(api)
    }, [])
    
    return <ProductContext.Provider value={{...state}}>
        {children}
    </ProductContext.Provider>
}

export const useProductContext=()=>{
    return useContext(ProductContext)
}
