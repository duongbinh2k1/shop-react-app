import React from 'react'
import ProductList from '../ProductList/ProductList'

const AllProducts = ({selectedTab}) => {
  return (
    <>
      <ProductList selectedTab={selectedTab} />
    </>
  )
}

export default AllProducts
