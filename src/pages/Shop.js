import React from 'react'
import AllProducts from '../components/AllProducts'
import Loading from '../components/Loading';
import SortProduct from '../components/SortProduct'
import { useProductContext } from '../store/context/product-context';
import { useSortContext } from '../store/context/SortContext';

const Shop = () => {
 
 const {isLoading}=useProductContext()
const {filterProducts}=useSortContext()


  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div className='columns m-6 is-one-fifth is-mobile'>
      <div className='column '>
        <SortProduct/>
      </div>

      <div className='column is-four-fifths'>
      <AllProducts filterProducts={filterProducts}/>
      </div>
    </div>
  )
}

export default Shop
