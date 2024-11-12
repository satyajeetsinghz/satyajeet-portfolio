import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (

    <div className="flex min-h-fit items-start justify-center bg-neutral-00">
      <div className="h-auto w-full bg-ed-300 mt-4 mb-4 md:w-[40rem] bg-red-00">
        <div className="h-16 w-full bg-ed-300 px-2 py-1 bg-yellow-00">
          <img className="size-12 md:size-16 rounded-full object-cover object-center" src="https://wallpaperaccess.com/full/1169332.jpg" alt="" />
          <div className="absolute top-0 translate-y-[7.5rem] md:translate-y-[8rem] translate-x-[3.5rem] md:translate-x-[5rem]">
            <h3 className="font-semibold text-lg text-[#292929]">Tony Stark</h3>
            <p className="text-sm text-[#4b5563]">Welcome to STARK Industries.</p>
          </div>
        </div>
        <div className="text-[#4b5563] p-2 bg-cyan-00 mt-4">
          <p className="text-sm leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur quae voluptates saepe, facilis quisquam tempora optio facere numquam eveniet eligendi consequuntur eaque vitae omnis amet fugiat exercitationem explicabo? Qui.</p>

          <p className="pt-4 text-sm leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur quae voluptates saepe, facilis quisquam tempora optio facere numquam eveniet eligendi consequuntur eaque vitae omnis amet fugiat exercitationem explicabo? Qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate totam quidem, cumque commodi ea pariatur quo perspiciatis? Laborum nesciunt alias, aut distinctio minus eveniet tenetur ea nihil doloremque rem officiis.</p>
        </div>

        <div className="p-2 mt-4 bg-red-00">
          <div className='flex flex-col space-y-2.5'>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <MailOutlineIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[12px] text-[#4b5563] underline'>satyajeetsingh.in@gmail.com</span>
            </button>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <GitHubIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[12px] text-[#4b5563] underline'>/satyajeetsinghz</span>
            </button>
            <button className='flex items-center bg-yellow- gap-x-2.5'>
              <LinkedInIcon sx={{ fontSize: 16, color: "#26292c" }} />
              <span className='text-[11px] sm:text-[12px] text-[#4b5563] underline'>satyajeet-singh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
