const SortReducer = (state, action) => {
  const { type, payload } = action;

//   get all product in SortContext from productContext
  if (type === "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      allproducts: [...payload],
      filterProducts: [...payload].sort((a,b)=>b.price-a.price),
    };
  }


//   filter product by category
  if (type === "SORT_CATEGORY") {
    let catproduct;
    if (payload == "all") {
      catproduct = state.allproducts;
    } else {
      catproduct = state.allproducts.filter((item) => {
        return item.category === payload;
      });
    }
    return {
      ...state,
        filterProducts: catproduct,
         category:payload
    };
  }

//  filter product by search name
if(type==="SEARCH_PRODUCTS"){
    let searchedProduct=state.allproducts.filter((item)=>{
        return item.title.toUpperCase().includes(payload.toUpperCase())
    })
    return {
        ...state,
        filterProducts:searchedProduct
    }
}

if(type==="SORT_BY_PRICE"){
    let sortedPrice;

    if(payload==="low"){
        sortedPrice= state.filterProducts.sort((a,b)=>a.price-b.price)
    }
    if(payload==="high"){
      sortedPrice= state.filterProducts.sort((a,b)=>b.price-a.price)
    }
    return {
        ...state,
        sortPrice:payload,
        filterProducts:sortedPrice
    }
}

if(type==="CLEAR_FILTER"){
  return {
    ...state,
    allproducts:payload,
    filterProducts:payload,
    category:"all",
  }
}


  return state;
};

export default SortReducer;
