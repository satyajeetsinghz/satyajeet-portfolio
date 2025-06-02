import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import HamburgerMenu from '../utilities/HamburgerMenu';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Navigation component function:

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/'); // Replace '/target-page' with your desired route
    };

    const navigateToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };




    return (
        <div className="flex items-start justify-center min-h-24 bg-gray-10 sticky top-0 inset-x-0 z-50">
            <div className='w-[98%] md:w-[85%] lg:w-[45%] h-12 mt-6 bg-white border border-neutral-200 rounded-full'>
                <div className='flex justify-between items-center pt-2.5 pl-1 pr-1'>

                    <div onClick={toHome} className='mx-4 cursor-pointer'>
                        <PermContactCalendarIcon />
                        <span className='text-sm mx-1.5 font-semibold text-neutral-700'>Satyajeet Singh</span>
                    </div>

                    <div className='hidden sm:flex pr-6 space-x-4 font-semibold text-[#4b5563]'>
                        {[
                            { label: 'Certification', section: 'work' },
                            { label: 'Project', section: 'project' },
                            { label: 'Not Available', section: null },
                        ].map(({ label, section }, index) => (
                            <a
                                key={index}
                                onClick={() => section && navigateToSection(section)}
                                href={section ? undefined : '#'}
                                className='group relative text-sm cursor-pointer text-[#4b5563] hover:text-[#22262b] transition-colors duration-300 ease-in-out pb-1'
                            >
                                {label}
                                <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-emerald-400 group-hover:w-1/2 transition-all duration-300 ease-in-out transform -translate-x-1/2 rounded-full"></span>
                            </a>
                        ))}
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
