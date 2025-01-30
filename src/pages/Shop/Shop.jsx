import React from 'react'
import Header from '../../components/Header/Header'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import ProductTabs from '../../components/ProductTabs/ProductTabs'
import ProductGallery from "../../components/ProductGallery/ProductGallery"
import RelatedProducts from '../../components/Related/Related'
import Footer from '../../components/Footer/Footer'

const Shop = () => {
  return (
    <div className="container mx-auto px-4 font-cera">
      <Header/>
    <div className="flex flex-col lg:flex-row gap-8">
      <ProductGallery/>
      <ProductInfo />
    </div>
    <ProductTabs />
    <RelatedProducts/>
    <Footer/>
  </div>

  )
}

export default Shop
