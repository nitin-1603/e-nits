import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../productCard/productCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testmonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((item) => item.cart)

  console.log(cartItem)

  const addItem = () => {
    dispatch(addToCart('shoes'))
  }

  const deleteItem = () => {
    dispatch(deleteFromCart('shoes'))
  }

  return (
    <>
      <Layout>
        <button className='btn btn-gray-600' onClick={() => addItem()}>Add item</button>
        <button onClick={() => deleteItem()}>Delete item</button>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </>
  )
}

export default Home
