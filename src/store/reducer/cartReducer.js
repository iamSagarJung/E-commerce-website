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
        if (item.id === id && item.amount + amount < 9) {
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
  return state;
};

export default cartReducer;
