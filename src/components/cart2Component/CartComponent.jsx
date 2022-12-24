import CartHero from 'components/cartComponent/CartHero'
import CartVideo from 'components/cartComponent/CartVideo'
import SimilarCourses from 'components/cartComponent/SimilarCourses'
import Subscribe from 'components/cartComponent/Subscribe'
import InstructorComponent from 'components/cart2Component/InstructorComponent'


function CartComponent() {
  return (
    <div>
        <CartHero/>
        <CartVideo/>
        <InstructorComponent/>
        <SimilarCourses/>
        <CartHero/>
        <Subscribe/>

    </div>
  )
}

export default CartComponent