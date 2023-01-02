import React from "react";
import { useCartContext } from "../../store/context/cart-context";

const PromoCode = () => {
  const { promoSubmitHandler, handleChange, isPromoValid,promoValue } = useCartContext();
  return (
    <>
      <div className="has-text-left ml-4 ">
        Enter Promo Code
        {isPromoValid && (
          <span className="help is-success has-text-weight-semibold mr-5">
            (promo code applied)
          </span>
        )}
      </div>

      <br />
      <div className="columns is-mobile is-flex-column">
        <input
          className="column is-8 ml-5 input is-dark is-link"
          type="text"
          placeholder="Promo code "
          onChange={handleChange}
          value={promoValue}
        />
        <button
          className="is-4 has-text-weight-semibold   ml-3  button is-small is-dark"
          onClick={promoSubmitHandler}
          disabled={isPromoValid}
        >
          Submit
        </button>
        <br />
      </div>
      <p>
        <span className="help has-text-weight-semibold">
          use Promocode "sagar30" to get 10% discount upto 1 lakh
        </span>
      </p>
    </>
  );
};

export default PromoCode;
