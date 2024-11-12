import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import '../src/fonts/HostGrotesk.css'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className='min-h-screen bg-white text-black host-grotesk-family p-2 sm:p-0 md:p-0 lg:p-0'>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <WorkExperience />
      <Footer />
    </div>
  )
}

export default App
