import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Pagination } from '../components/Pagination'
import { Tags } from '../components/Tags'
import { Videos } from '../components/Videos'



export const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <Videos />
      <Pagination />
      <Footer />
    </>
  )
}

export default Home