import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import MainDisplay from './MainDisplay';
import Login from './Login';

const Navigation = () => {

    return (
        <Router>
            <div className='min-h-screen bg-white text-black host-grotesk-family p-2 sm:p-0 md:p-0 lg:p-0'>

                {/* SPA navigation components */}
                <Routes>
                    <Route path="/" element={<MainDisplay />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

            </div>
        </Router>
    )
}

export default Navigation
