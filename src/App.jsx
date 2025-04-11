import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import '../src/fonts/HostGrotesk.css'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay';


function App() {

  return (
    <Router>
      <div className='min-h-screen bg-white text-black host-grotesk-family p-2 sm:p-0 md:p-0 lg:p-0'>
        <Navbar />
        {/* SPA navigation components */}
        <Routes>
          <Route path="/" element={<MainDisplay />} />
          {/* <Route path="/workexperience" element={<WorkExperience />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
