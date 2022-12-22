import React from 'react'
import CartHero from 'components/cartComponent/CartHero'
import CartVideo from './CartVideo'
import DownloadComponent from 'components/cartComponent/DownloadComponent'
import SimilarCourses from 'components/cartComponent/SimilarCourses'
import Subscribe from 'components/cartComponent/Subscribe'

function CartComponent() {
  return (
    <div>
        <CartHero/>
        <CartVideo/>
        <DownloadComponent/>
        <SimilarCourses/>
        <CartHero/>
        <Subscribe/>

    </div>
  )
}

export default CartComponent