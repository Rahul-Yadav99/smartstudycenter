import Hero from '@/components/Hero'
import Rank from '@/components/Rank'
import NavBar from '@/components/shared/NavBar'
import Specialized from '@/components/Specialized'

const page = () => {
  return (
    <>
      <NavBar lable='Home' />
      <Hero />
      <Specialized />
      <Rank />
    </>
  )
}

export default page