
const cartReducer = (state,action) => {
  const {type,payload}=action

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
  return state
}

export default cartReducer;
