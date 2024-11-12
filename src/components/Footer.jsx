import React from 'react'

const Footer = () => {
    return (
        <div className='min-w-full flex justify-center items-center h-16 text-xs text-[#4b5563] font-medium'>
            <div className='sm:min-w-[40rem] flex justify-between py-4 h-14 border-t border-neutral-700 sm:translate-x-4'>
                <p>© 2024 Portfolio-Satyajeet.</p>
                <div className='flex space-x-4'>
                    <a className='underline' href="http://">Mail</a>
                    <a className='underline' href="http://">Github</a>
                    <a className='underline' href="http://">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
