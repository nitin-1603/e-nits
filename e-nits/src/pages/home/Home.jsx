import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../productCard/productCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testmonial'


const Home = () => {
  return (
    <>
      <Layout>
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
