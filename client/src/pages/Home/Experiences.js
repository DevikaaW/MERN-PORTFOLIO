import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences'

function Experiences() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);  
  return (
    <div className='py-20'>
        <SectionTitle title="Experience"/>
        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#0b3063] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experiences.map((experiences, index)=> (
                    <div 
                        key={index}
                        onClick={()=>{
                            setselectedItemIndex(index);
                        }}
                        className='cursor-pointer'
                    >
                        <h1 className={`text-2xl px-5
                            ${selectedItemIndex === index ? 
                            'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#048ba8] bg-opacity-20 py-3' : 'text-white'}`}
                            >
                                {experiences.period}
                        </h1>
                    </div>
                ))}

            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-2xl'>{experiences[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>                
                <p className='text-white'>{experiences[selectedItemIndex].description}</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences