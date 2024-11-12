import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import '../src/fonts/Inter.css'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen bg-white text-black inter-family p-2 sm:p-0 md:p-0 lg:p-0'>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
