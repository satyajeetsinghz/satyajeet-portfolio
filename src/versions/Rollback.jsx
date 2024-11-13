// App.jsx file update when we want to navigate a entire web page without navbar and footer component 

import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import '../src/fonts/HostGrotesk.css'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import MainDisplay from './components/MainDisplay';
import InvalidPage from './components/InvalidPage';
import Login from './components/Login';
import Signup from './components/Signup';


function Navigation() {

  const location = useLocation();

  // Define a set of routes where only standalone components should display
  const standaloneRoutes = ['/login', '/signup'];

  // Check if the current route is in the standalone routes
  const isStandalonePage = standaloneRoutes.includes(location.pathname);

  return (

    <div className='min-h-screen bg-white text-black host-grotesk-family p-2 sm:p-0 md:p-0 lg:p-0'>
      {/* Only show Navbar and Footer if not on a standalone page */}
      {!isStandalonePage && <Navbar />}
      {/* SPA navigation components */}
      <Routes>
        {/* Main content routes */}
        <Route path="/" element={<MainDisplay />} />
        <Route path="/work-experience" element={<WorkExperience />} />

        {/* Standalone routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isStandalonePage && <Footer />}
    </div>

  )
}

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App
