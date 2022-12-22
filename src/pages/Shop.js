import React from "react";
import AllProducts from "../components/AllProducts";
import Loading from "../components/Loading";
import SortProduct from "../components/SortProduct";
import SearchProduct from "../components/sub-components/SearchProduct";
import { useProductContext } from "../store/context/product-context";
import { useSortContext } from "../store/context/SortContext";

const Shop = () => {
  const { isLoading } = useProductContext();
  const { filterProducts } = useSortContext();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="columns m-4 is-one-fifth is-tablet ">
      <div className="column">
        <SortProduct />
      </div>

      <div className="column is-four-fifths">
        <div className="mr-5 p-1">
          <SearchProduct />
        </div>
        <AllProducts filterProducts={filterProducts} />
      </div>
    </div>
  );
};

export default Shop;
