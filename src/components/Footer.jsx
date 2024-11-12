import React from 'react'

const Footer = () => {
    return (
        <div className='min-w-full flex justify-center items-center h-16 text-xs text-[#4b5563] font-medium'>
            <div className='w-full sm:w-[40rem] md:w-[40rem] lg:w-[40rem] flex justify-between py-4 h-14 border-t border-neutral-700 sm:translate-x-2'>
                <p>© 2024 Portfolio-Satyajeet.</p>
                <div className='me-[8px] sm:m-0 flex space-x-2.5'>
                    <a className='underline' href="http://">Mail</a>
                    <a className='underline' href="http://">Github</a>
                    <a className='underline' href="http://">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
