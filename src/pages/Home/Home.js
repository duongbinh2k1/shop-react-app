import React from 'react'
import Collections from '../../components/Collections/Collections'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import ProductsArea from '../../components/ProductsArea/ProductsArea'

const Home = () => {
  return (
    <>
      <div className="container" style={{marginTop: '120px'}}>
        <Hero />
        <ProductsArea />
        <Collections />
      </div>
    </>
  )
}

export default Home
