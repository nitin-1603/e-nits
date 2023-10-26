import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../productCard/productCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testmonial'
// import {useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'


const Home = () => {
  // {...useDispatch works with redux toolkit...}

  // const dispatch = useDispatch();
  // const cartItem = useSelector((item) => item.cart)


  // const addItem = () => {
  //   dispatch(addToCart('shoes'))
  // }

  // const deleteItem = () => {
  //   dispatch(deleteFromCart('shoes'))
  // }

  return (
    <>
      <Layout>
        {/* <button className='btn btn-gray-600' onClick={() => addItem()}>Add item</button>
        <button onClick={() => deleteItem()}>Delete item</button> */}
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
