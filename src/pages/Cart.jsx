import React from 'react'
import NavigationComponent from 'components/navigationComponents/NavigationComponent'
import FooterComponent from 'components/footerComponents/FooterComponent'
import CartComponent from 'components/cartComponent/CartComponent'


function Cart() {
  return (
    <div>
        <NavigationComponent/>
        <CartComponent/>
        <FooterComponent/>
    </div>
  )
}

export default Cart