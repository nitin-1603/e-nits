import Layout from '../../components/layout/Layout'
import Category from '../../components/category/Category'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'


const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection/>
        <Filter/>
      </Layout>
    </>
  )
}

export default Home
