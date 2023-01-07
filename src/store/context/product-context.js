import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducer/productReducer";

const api = "https://fakestoreapi.com/products";

const ProductContext = createContext();

const initialState = {
  allProduct: [],
  isLoading: false,
  productDetail: {},
  isError:false
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isSignIn, setIsSignIn } = useState(false);

  // fetching data
  const fetchedData = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCTS_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // get single product
  const getProductDetails = async (url) => {
  try{
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(url);
    const productDetail = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: productDetail });
  }catch(error){
    dispatch({type:"SINGLE_ERROR"})
  }
  };

  const sortCategory = (e) => {
    dispatch({ type: "SORT_CATEGORY", payload: e.target.textContent });
  };

  useEffect(() => {
    fetchedData(api);
  }, []);


  return (
    <ProductContext.Provider
      value={{
        ...state,
        getProductDetails,
        sortCategory,
        isSignIn,
        setIsSignIn,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
