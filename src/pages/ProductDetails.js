import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../store/context/product-context'

const ProductDetails = () => {
  const {ProductDetails}=useProductContext()
  console.log(ProductDetails)
  // const {id}=useParams()
  // const singleItem=allProduct.filter((item)=>{
  //   return item.id==id
  // })

  return (
    <div>
      
    </div>
  )
}

export default ProductDetails
