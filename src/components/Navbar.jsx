import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HamburgerMenu from '../utilities/HamburgerMenu';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="flex items-start justify-center min-h-24 bg-gray-10 sticky top-0 inset-x-0 z-50">
            <div className='w-[98%] md:w-[85%] lg:w-[45%] h-12 mt-6 bg-white border border-neutral-200 rounded-full'>
                <div className='flex justify-between items-center pt-2.5 pl-1 pr-1'>
                    <img className='w-10' src="https://www.clipartmax.com/png/middle/165-1658463_iron-man-3-arc-reactor-png.png" alt="" />
                    <div className='hidden sm:flex pr-4 space-x-4 font-semibold text-[#4b5563]'>
                        <a className='bg-red-20 text-sm hover:text-[#32e4f4]' href="/">
                            {/* <div className='w-[44px] bg-[#32e4f4] h-0.5 relative bottom-[-34px]'></div> */}
                            Option not avilable
                        </a>
                        {/* <a className='hover:text-[#32e4f4]' href="/">Projects</a> */}
                        {/* <a className='hover:text-[#32e4f4]' href="/">Connect</a> */}
                    </div>

                    {/* Mobile View  */}
                    <div className='flex pr-1 space-x-4 font-semibold text-[#4b5563] sm:hidden md:hidden lg:hidden xl:hidden'>
                        <a onClick={toggleMenu}>
                            <MenuIcon sx={{ fontSize: 20 }} />
                        </a>
                        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
