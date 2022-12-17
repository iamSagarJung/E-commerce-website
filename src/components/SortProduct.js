import React from 'react'
import { useProductContext } from '../store/context/product-context'
import { useSortContext } from '../store/context/SortContext'

const SortProduct = () => {
    const {allProduct}=useProductContext()
    const unique = [...new Set(allProduct.map((item) => item.category))]
  const {sortCategory}=useSortContext()
  return (
    <div>
      <h1 className='title is-size-5'>category</h1>
      {
        unique.map((item,index)=>{
          return <div key={index} className="is-flex mb-3 " >
            <button className='button is-size-7' onClick={sortCategory}>{item}</button>
          </div>
        })
      }
    </div>
  )
}

export default SortProduct
