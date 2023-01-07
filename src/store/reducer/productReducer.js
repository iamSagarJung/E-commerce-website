import React from 'react'

const productReducer = (state,action) => {
 const {type,payload}=action

 if(type==="SET_LOADING"){
    return {
        ...state,
        isLoading:true,
    }
 }
    if(type==="GET_PRODUCTS_DATA"){
        return {
            ...state,
            isLoading:false,
            allProduct:payload
        }
    }

    if(type==="GET_SINGLE_PRODUCT"){
        return{
            ...state,
            isLoading:false,
            productDetail:payload
        }
    }
  
    if(type==="API_ERROR"){
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
    }


 return state;
}

export default productReducer



