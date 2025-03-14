import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:hidden'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-3'>
                <a href='https://www.linkedin.com/in/devikaw/'>
                    <i class="ri-linkedin-box-fill text-gray-500 text-2xl"></i>
                </a>
                <a href='https://github.com/DevikaaW'>
                    <i class="ri-github-fill text-gray-500 text-2xl"></i>
                </a>
                <a href='mailto:devikamaroti.wandhare@ucdenver.edu'>
                    <i class="ri-mail-line text-gray-500 text-2xl"></i> 
                </a>
                <a href='https://www.instagram.com/thatgirlinlilac/'>
                    <i class="ri-instagram-line text-gray-500 text-2xl"></i>
                </a>
            </div>
            <div className='w-[1px] h-52 bg-[#263c59]'>

            </div>
        </div>
    </div>
  )
}

export default LeftSider