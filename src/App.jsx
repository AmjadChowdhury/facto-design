
import './App.css'
import Banner from './Section/Banner'
import Navbar from './Section/Navbar'
import Revolution from './Section/Revolution'

function App() {


  return (
    <>
      <div className='mx-1 lg:mx-5 space-y-2'>
        <Navbar/>
      <Banner/>
      <Revolution/>
      </div>
    </>
  )
}

export default App
