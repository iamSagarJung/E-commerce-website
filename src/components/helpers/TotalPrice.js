import { useCartContext } from '../../store/context/cart-context'
import PromoCode from '../cart/PromoCode'
import Price from "../helpers/Price"
import { useState } from "react";
import  OrderModal  from '../Portal/OrderModal';



const TotalPrice = () => {
  const [show,setShow]=useState(false)

    const {totalPrice,shippingFee,discountedPrice}=useCartContext()
  return <div className=' notification'>
    <p className='help has-text-danger has-text-left'><b>note</b>: shipping fee is free on the purchase above 2 lakh </p>
   <div className="columns is-vcentered is-mobile">
        <div className="column has-text-right-mobile is-size-6">
          <p>Sub Total:</p>
          <p>Discount:</p>
          <p>Shipping:</p>
          <hr className='has-background-dark'/>
          <p className="has-text-weight-bold">Order Total:</p>
        </div>
        <div className="column has-text-left-mobile is-size-6">
          <div className="has-text-weight-bold">{<Price price={totalPrice}/> }</div>
          <div className="has-text-weight-bold has-text-danger">{<Price price={-discountedPrice}/> }</div>
          <div className="has-text-weight-bold">{<Price price={shippingFee}/> }</div>
          <hr className='is-fullwidth has-background-dark'/>
          <div className="has-text-weight-bold">{<Price price={totalPrice-discountedPrice+shippingFee}/> }</div>
        </div>
        <div className="column">
            <PromoCode/>
          <button className="button is-warning is-fullwidth mt-6 has-text-weight-bold" onClick={() => setShow(true)}>Confirm Order</button>
          {show && <OrderModal setShow={setShow}/>}

        </div>
      </div>
  </div>
}

export default TotalPrice
