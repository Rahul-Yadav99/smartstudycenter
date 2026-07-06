import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import Rank from '@/components/Rank'
import Footer from '@/components/shared/Footer'
import NavBar from '@/components/shared/NavBar'
import Specialized from '@/components/Specialized'

const page = () => {
  return (
    <>
      <NavBar lable='Home' />
      <Hero />
      <Specialized />
      <Rank />
      <Carousel />
      <Footer lable='Home' />
    </>
  )
}

export default page