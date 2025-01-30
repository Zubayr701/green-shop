import React from 'react'
import Header from '../../components/Header/Header'
import RelatedProducts from '../../components/Related/Related'
import Footer from '../../components/Footer/Footer'
import CartTotals from '../../components/CartTotals/CartTotals'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'

const ShopCard = () => {
  return (
    <div>
        <Header/>
        <div style={{display:"flex"}} >
          
        <ShoppingCart/>
        <CartTotals />
        </div>
    <RelatedProducts/>
    <Footer/>
    </div>
  )
}

export default ShopCard
