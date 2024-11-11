import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import '../src/fonts/Inter.css'

function App() {

  return (
    <div className='h-[100dvh] xl:h-[100dvh] bg-white text-black inter-family'>
      <Navbar />
      <Header />
      <Projects />
    </div>
  )
}

export default App
