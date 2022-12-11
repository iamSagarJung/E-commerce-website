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

    if(type==="GET_SINGLE_PRODUCTS"){
        const singleItem=state.allProduct.filter(()=>{
            return state.allProduct.id!==payload
        })
        return{
            ...state,
            isLoading:false,
            productDetail:singleItem
        }
    }
 return state;
}

export default productReducer
