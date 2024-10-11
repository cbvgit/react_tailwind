import React from 'react'
import back from './feedback.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
function Feedback() {
  return (
    <>
<Navbar />
    <div className='max-w-screen-2xl h- container mx-0 my-2 flex flex-col md:flex-row '>
     <div className='w-full bg-zinc-300 text-left md:w-1/3'> 
     <img src={back} className='w-full h-50'/>
     
     </div> 
     
     <div className='w-full bg-slate-400 border-s-4 text-left text-xl text-white md:w-2/3'>
         
      <h1 className='text-3xl  text-center text-wrap text-red-700'>Feedback Page</h1> 
    <div className='w-full md:w-1/2  my-10 border-solid border-2 border-red-400 mx-40 text-center' >
      
         <label className=" text-red-950 text-2xl input-bordered ">
        Name  </label>
        <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" /> 
  <label className=" text-red-950 text-2xl input-bordered ">
        Contact  </label>
        <input className='input mx-2 w-96 input-bordered flex items-center gap-2 grow' type="text"   placeholder=" " />
        <label className=" text-red-950 text-2xl input-bordered ">
        Email  </label>
        <input className='input mx-2 w-96 input-bordered flex items-center gap-2 grow' type="text"   placeholder=" " />
       
        <label className=" text-red-950 text-2xl input-bordered ">
        Feedback/Comment  </label>
        <textarea   cols={25} className='input mx-2 h-48 w-96 input-bordered flex items-center gap-2 grow'     placeholder=" " ></textarea>
       
        <button className="btn btn-neutralmx-4 w-32 bg-black text-white rounded-md my-6 mx-3">Submit</button>
        <button className="btn btn-neutralmx-4 w-32 bg-black text-white rounded-md my-6 mx-3">Cancel</button>
         

         
        </div>
     </div> 
     
    </div>
    <Footer />
    </>
  )
}

export default Feedback
