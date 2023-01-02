import React, { useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineLocalShipping, MdSupport } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { NavLink, useParams } from "react-router-dom";
import Price from "../components/helpers/Price";
import StarRating from "../components/helpers/StarRating";
import Loading from "../components/Loading";
import { useCartContext } from "../store/context/cart-context";
import { useProductContext } from "../store/context/product-context";
const api = "https://fakestoreapi.com/products";

const ProductDetails = () => {
  const {isLoading,productDetail,getProductDetails} = useProductContext();
  const { addToCart,totalAmount}=useCartContext()
  const { id } = useParams();
  const { image, price, title, description, rating, category } = productDetail;


  const [amount,setAmount]=useState(1)

  const increment=()=>{
    if(amount<9){
      setAmount(amount+1)
    }else{
      setAmount(amount)
    }
  }

  const decrement=()=>{
    if(amount>1){
      setAmount(amount-1)
    }else{
      setAmount(amount)
    }
  }

  useEffect(() => {
    getProductDetails(`${api}/${id}`);
  }, []);

  
  // loading is appeared when data is not loaded
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="card  m-6 columns">
        <div className="card-image column is-half">
          <figure className="image is-5by4 m-6">
            <img src={image} alt={title} />
          </figure>
        </div>

        <div className="card-content column  mt-6">
          <p className="has-text-grey-lighter has-text-weight-bold= is-size-6 category">
            {category}
          </p>
          <h1 className="title is-size-4">{title}</h1>
          {/* <StarRating rating={rating.rate} /> */}
          <div className="is-flex my-4">
            <section className="is-size-6 has-text-success has-text-weight-semibold mr-3">
              <Price price={price} />
            </section>
            <span>
              <s className="is-size-7 has-text-grey has-text-weight-bold">
                <Price price={price + (20 / 100) * price} />
              </s>
            </span>
          </div>
          <p className="has-text-grey is-size-7 category">{description}</p>

          <div className="is-flex my-5 is-size-3 has-text-weight-bold">
            <div className="has-text-centered">
              <span className=" card px-2 has-text-black has-background-light">
                <MdOutlineLocalShipping />
              </span>
              <p className="is-size-7 has-text-success ">Free shipping</p>
            </div>

            <div className="has-text-centered ml-6">
              <span className="card px-2 has-text-black has-background-light">
                <RiRefund2Fill />
              </span>
              <p className="is-size-7 has-text-danger ">100% Refund</p>
            </div>

            <div className="has-text-centered  ml-6">
              <span className=" card px-2 has-text-black has-background-light">
                <MdSupport />
              </span>
              <p className="is-size-7 has-text-warning">24/7 Support</p>
            </div>
          </div>
          <hr />

          {/* increase and decrease item button */}
          <p className="has-text-grey">QTY</p>

          <div className="mt-1 is-size-4 is-flex  ">
            <span className="mr-4  has-text-grey">
              <AiOutlineMinusCircle onClick={decrement} />
            </span>
            <p className="is-size-5">{amount}</p>
            <p className="ml-4 has-text-grey">
              <AiOutlinePlusCircle onClick={increment} />
            </p>
          </div>
          <NavLink to="/cart" onClick={()=>addToCart(id,amount,productDetail)}>
          <button className="button is-link is-white mt-2 ">add to cart</button>
          </NavLink>
        </div>
        
      </div>
    </>
  );
};

export default ProductDetails;
