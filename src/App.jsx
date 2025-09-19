
import './App.css'
import Banner from './Section/Banner'
import Contact from './Section/Contact'
import CustomerReview from './Section/CustomerReview'
import Footer from './Section/Footer'
import Navbar from './Section/Navbar'
import Pricing from './Section/Pricing'
import Revolution from './Section/Revolution'
import Unlock from './Section/Unlock'

function App() {


  return (
    <>
      <div className='mx-1 lg:mx-5 space-y-2'>
        <Navbar/>
      <Banner/>
      <Revolution/>
      <CustomerReview/>
      <Pricing/>
      <Contact/>
      <Unlock/>
      <Footer/>
      </div>
    </>
  )
}

export default App
