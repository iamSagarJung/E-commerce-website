import React from "react";
import { useSortContext } from "../../store/context/SortContext";

const SearchProduct = () => {
  const { handleSearch,category,filterProducts,handlePrice,sortPrice} = useSortContext();
  return (
    <div className="columns mx- mb-6 is-tablet">


        {/* minimum  to maximum price */}
        <div className="column">
      <div className="select">
        <select value={sortPrice}  onChange={handlePrice}>
          <option value="high">Price (Highest)</option>
          <option value="low">Price (lowest)</option>
        </select>
      </div>
      </div>

      {/* number of items available */}
      <div className="column">
        <span className="title is-size-5 has-text-info p-1">{category}</span>
        <span className="title pr-1 has-text-link">/</span>
        {`${filterProducts.length} items available`}
      </div>


      {/* search by name */}
      <div className="field column">
        <p className="control has-icons-left">
          <input
            className="input"
            type="search"
            placeholder="Search products here.."
            onChange={handleSearch}
          />
          <span className="icon  is-left">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SearchProduct;
