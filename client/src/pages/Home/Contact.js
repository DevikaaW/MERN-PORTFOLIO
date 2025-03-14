import React, {useEffect, useRef} from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: "Devika Wandhare",
        email: "devikamaroti.wandhare@ucdenver.edu",
        age: "25",
        gender: "Female",
        address: "Tempe, AZ"
    };
  return (
    <div>
        <SectionTitle title="Say Hi"/>
        <div className='flex sm:flex-col items-center gap-40'>
            <div className='flex flex-col gap-1'>
                <p className='text-tertiary'>{'{'}</p>
                {Object.keys(user).map((key)=>(
                    <p className='ml-5'>
                        <span className='text-tertiary'>{key} : </span>
                        <span className='text-tertiary'>{user[key]}</span>
                    </p>
                ))}
                    <p className='text-tertiary'>{'}'}</p>
            </div>
            <div className='h-[300px]'>
            <dotlottie-player src="https://lottie.host/4cc85105-7981-44a8-bab3-91ed63c04c8d/Wz77TqCggc.json" 
            background="transparent" 
            speed="1"
            autoplay></dotlottie-player>
            </div>
        </div>
    </div>
  )
}

export default Contact