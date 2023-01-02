const cartReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "INCREMENT") {
    const uniqueProduct = state.cart.map((item) => {
      if (item.id === payload && item.amount < 9) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: uniqueProduct,
    };
  }

  if (type === "DECREMENT") {
    let uniqueProduct = state.cart.map((item) => {
      if (item.id === payload && item.amount > 1) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: uniqueProduct,
    };
  }

  if (type === "ADD_TO_CART") {
    let { id, amount, productDetail } = payload;
    let existingProduct = state.cart.find((item) => {
      return item.id === id;
    });

    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id) {
          if (item.amount + amount <= 9) {
            return {
              ...item,
              amount: amount + item.amount,
            };
          } else {
            return {
              ...item,
              amount: 9,
            };
          }
        } else {
          return {
            ...item,
          };
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id,
        name: productDetail.title,
        price: productDetail.price,
        image: productDetail.image,
        amount: amount,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (type === "REMOVE_FROM_CART") {
    let filteredProduct = state.cart.filter((item) => {
      return item.id !== payload;
    });

    return {
      ...state,
      cart: filteredProduct,
    };
  }

  if (type === "TOTAL_PRICE") {
    const existingProduct = state.cart.map((item) => {
      return item.price * item.amount;
    });

    const totalPrice = existingProduct.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return {
      ...state,
      totalPrice: totalPrice,
    };
  }

  if (type === "SET_INPUT_VALUE") {
    if(state.promoValue==="sagar30"){
   console.log("s")
    }
    return {
      ...state,
      promoValue: payload,
    };
  }

  if (type === "DISCOUNT_PRICE") {
    let discountPrice;
    let valid = false;
    let value=state.promoValue

    if (state.promoValue === "sagar30") {
      valid = true;
      // value=""
      if (state.totalPrice <= 779.42) {
        discountPrice = (10 / 100) * state.totalPrice;
      } else {
        discountPrice = (10 / 100) * 779.42;
      }
    } else {
      discountPrice = 0;
    }
    return {
      ...state,
      discountedPrice: discountPrice,
      isPromoValid: valid,
      // promoValue:value
    };
  }

  if (type === "SHIPPING_CHARGE") {
    let sp;
    if (state.totalPrice <= 1558) {
      sp = (1 / 100) * state.totalPrice;
    } else {
      sp = 0;
    }
    return {
      ...state,
      shippingFee: sp,
    };
  }
   if(type==="TOTAL_ITEMS"){
    const existingNoOfItems = state.cart.map((item) => {
      return item.amount;
    });
    const totalItems=existingNoOfItems.reduce((accumulator,currentValue)=>{
      return accumulator+currentValue
    },0)
    return {
      ...state,
      totalNoOfItems:totalItems
    }
   }
  return state;
};

export default cartReducer;
