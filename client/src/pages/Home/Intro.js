import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>
            Devika Wandhare
        </h1>
        <h1 className='text-tertiary text-6xl sm:text-3xl font-semibold'>
            I build websites and Android Apps.
        </h1>
        <p className='text-white w-2/3'>
        Software Developer with 3+ years of hands-on experience in Android development, full-stack web development, object-oriented programming, data integration, and cloud technologies. 
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
            Get to know me
        </button>
    </div>
  )
}

export default Intro