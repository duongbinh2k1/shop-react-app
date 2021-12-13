import React from 'react'
import ProductList from '../ProductList/ProductList'

const BestSeller = ({ selectedTab }) => {

  return (
    <>
      <ProductList selectedTab={selectedTab}/>
    </>
  )
}

export default BestSeller
