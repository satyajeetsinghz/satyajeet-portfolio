import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (

    <div className="flex min-h-fit items-start justify-center bg-neutral-00">
      <div className="h-auto w-full bg-ed-300 mt-4 mb-4 md:w-[40rem] bg-red-00">
        <div className="h-16 w-full bg-ed-300 px-2 py-1 bg-yellow-00">
          <div>
            <img className="size-14 md:size-16 rounded-full object-cover object-center" src="https://media.licdn.com/dms/image/v2/D5603AQFs5wapq63OBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726377182693?e=1736985600&v=beta&t=Xsv5nAh8VLD0_f7uZ9WQgdm_kf-Qoqwo9QYUjLBLe6w" alt="" />
          </div>
          <div className="absolute top-0 translate-y-[8.3rem] md:translate-y-[8rem] translate-x-[4.5rem] md:translate-x-[5rem]">
            <h3 className="font-semibold text-lg text-gray-800">Satyajeet Singh</h3>
            <p className="text-sm text-gray-600">Frontend Dev, UI/UX Designer.</p>
          </div>
        </div>
        <div className="text-gray-600 text-[0.875rem] leading-[1.45rem] p-2 bg-cyan-00 mt-4">
          <p className="">I am a dedicated frontend developer and UI/UX designer with a strong foundation in HTML, CSS, JavaScript, and React, along with a specialization in Data Science as part of my Computer Science Engineering studies at Galgotias College of Engineering and Technology.</p>

          <p className="pt-4">Aspiring to excel as a Software Development Engineer, I am currently deepening my expertise in Data Structures and Algorithms using C++ to sharpen my problem-solving skills. With a commitment to merging creativity with technical proficiency, I am dedicated to delivering innovative, high-impact solutions that drive both functionality and user satisfaction.</p>
        </div>

        <div className="p-2 mt-4 bg-red-00">
          <div className='flex flex-col space-y-2.5'>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <MailOutlineIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[13px] text-[#4b5563] hover:text-[#32e4f4] font-normal underline'>satyajeetsingh.in@gmail.com</span>
            </button>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <GitHubIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[13px] text-[#4b5563] hover:text-[#32e4f4] font-normal underline'>satyajeetsinghz</span>
            </button>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <LinkedInIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[13px] text-[#4b5563] hover:text-[#32e4f4] font-normal underline'>satyajeet-singh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
