import React from "react";
import { useProductContext } from "../store/context/product-context";
import { useSortContext } from "../store/context/SortContext";

const SortProduct = () => {
  const { allProduct } = useProductContext();
  const unique = [...new Set(allProduct.map((item) => item.category))];
  unique.unshift("all");
  const { sortCategory, handleClear } = useSortContext();
  return (
    <>
       {/* filter by category */}
      <h1 className="title is-size-5">category</h1>
      {unique.map((item, index) => {
        return (
          <div key={index} className="is-flex mb-3 ">
            <button className="button is-size-7" onClick={sortCategory}>
              {item}
            </button>
          </div>
        );
      })}
      <hr/>
      <button className="button is-link mt-4 has-text-weight-bold" onClick={handleClear}>Clear Filter</button>
    </>
  );
};

export default SortProduct;
