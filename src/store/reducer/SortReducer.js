
const SortReducer = (state,action) => {
    const {type,payload}=action;


if(type==='LOAD_FILTER_PRODUCTS'){
    return {
        ...state,
        products:[...payload],
        filterProducts:[...payload]
    }
}
    if(type==="SORT_CATEGORY"){
        let catproduct=state.filterProducts.filter((item)=>{
            return item.category===payload
        })
        console.log(payload)
        return {
            ...state,
            filterProducts:catproduct
        }
    }

  return state


  
}

export default SortReducer
