import React from 'react'
import midimage from './1.jpg'
function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-0 my-2 flex flex-col md:flex-row '>
     <div className='w-full bg-slate-400 text-left md:w-1/2'>
         
      <h1 className='text-3xl  text-center text-wrap text-red-700'>Mid dmvbnzvbzzv ndv dvlndzkvlkdv 
        dbfjbhdkjbd
        ,.dnd bkjbjds bldskbjdslbkndsbn4
        jkbbndbndnbdsk jbndnbmLeft </h1>
     
     </div> 
     <div className='w-full bg-zinc-300 text-left md:w-1/2'> 
     <img src={midimage} className='w-full h-50'/>
     
     </div> 
    </div>
  )
}

export default Banner
