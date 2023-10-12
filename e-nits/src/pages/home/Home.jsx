import Layout from '../../components/layout/Layout'

import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../productCard/productCard'
import Track from '../../components/track/Track'


const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection/>
        <Filter/>
      </Layout>
      <ProductCard/>
      <Track/>
    </>
  )
}

export default Home
