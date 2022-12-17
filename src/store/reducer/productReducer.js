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
    if(type==="INCREMENT"){
        let increment;
        if(state.noOfItems===9){
            increment=state.noOfItems
        }else{
            increment=state.noOfItems+1
        }
        return {
            ...state,
            noOfItems:increment,
        }
    }

    if(type==="DECREMENT"){
        let decrement;
        if(state.noOfItems===1){
            decrement=state.noOfItems
        }else{
            decrement=state.noOfItems-1
        }
        return {
            ...state,
            noOfItems:decrement
        }
    }


 return state;
}

export default productReducer



