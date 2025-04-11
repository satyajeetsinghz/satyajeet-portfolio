import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='min-w-full flex justify-center items-center h-16 text-xs text-[#4b5563] font-medium'>
            <div className='w-full sm:w-[40rem] md:w-[40rem] lg:w-[40rem] flex justify-between py-4 h-14 border-t border-neutral-700 sm:translate-x-2'>
                <p>© 2024 Portfolio-Satyajeet.</p>
                <div className='me-[8px] sm:m-0 flex space-x-2.5'>
                    <a href="mailto:satyajeetsingh.in@gmail.com">
                    <EmailIcon sx={{fontSize: 16, "&:hover":{color: "black"}}}/>
                    </a>
                    <a href="https://github.com/satyajeetsinghz">
                    <GitHubIcon sx={{fontSize: 16, "&:hover":{color: "black"}}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/satyajeet-singh-a70633230/">
                    <LinkedInIcon sx={{fontSize: 16, "&:hover":{color: "blue"}}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
