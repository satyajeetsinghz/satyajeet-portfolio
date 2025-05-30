import React from 'react'
import { useNavigate } from 'react-router-dom';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import FilePresentIcon from '@mui/icons-material/FilePresent';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {


    const navigate = useNavigate();

    const toWorkExperience = () => {
        navigate('/workexperience'); // Replace '/target-page' with your desired route
    };

    return (
        <div className='relative'>
            <div className={`fixed top-0 right-0 h-screen w-3/5 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}>
                <button className="absolute top-4 right-4 text-gray-600" onClick={toggleMenu}>
                    <CloseSharpIcon />
                </button>
                {/* <h2 className='text-black'> OK</h2> */}

                <ul className="flex flex-col justify-center items-center p-4 space-y-4 translate-y-32 text-lg">
                    <li>
                        {/* <div className='w-[2.5rem] ml-[50px] bg-[#32e4f4] h-0.5 relative bottom-[-34px]'></div> */}
                        <a href="" target="_blank" rel="noopener noreferrer" className='text-zinc-600 text-sm hover:text-[#151718]'>
                            <div className='w-16 bg-[#151718] h-0.5 relative bottom-[-30px] translate-x-11'></div>
                            <div className='inline-flex items-center space-x-1'>
                                <FilePresentIcon />
                                <span>Not Avilable</span>
                            </div>
                        </a>
                    </li>

                    {/* Spotify Project link  */}

                    {/* <li>
                        <div className='inline-flex items-center'>
                            <img className='size-6 mx-2' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png" alt="" />
                            <a href='https://spotifyclonebeta.vercel.app/' className='hover:text-[#3ff464]'>
                                Spotify Clone
                            </a>
                        </div>
                    </li> */}

                </ul>

                <div className='flex justify-center items-center translate-y-[10rem] ml-1'>
                    <div className='flex flex-col items-center'>
                        <span className='text-sm font-medium text-gray-800'>Connect on:</span>
                        <a href="https://github.com/satyajeetsinghz">
                            <button type="button" className="text-gray-800 hover:text-gray-50 bg-white border-2 border-neutral-950 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Github profile
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
