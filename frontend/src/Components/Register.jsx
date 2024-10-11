import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from 'react-hook-form';
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
   <>
   <Navbar />
   <form onSubmit={handleSubmit((data)=> console.log(data))}>
    <div className='min-h-screen-xl    bg-slate-300 flex flex-col md:flex-row text-zinc-950 text-xl'>
    <div className='w-full  md:w-1/3  bg-lime-400'>
 
    </div>

    <div className='w-full md:w-2/3  bg-slate-300'>
<h1 className='text-4xl '> Register here </h1>
 <span className='text-left text-primary-content mx-0'>Name</span>
<label className="input my-3 input-bordered flex items-center gap-2">
  Name
  <input type="text" id="Name" {...register('Name',{ pattern: /^[A-Za-z]+$/i }, {required: true })} className="grow" placeholder=" " />
  {errors.Name && <p className='text-red-700'>Please enter your name</p>}
</label>
<label className="input my-4 input-bordered flex items-center gap-2">
  Contact
  <input {...register('Contact',  {required: true })} type="number" className="grow bg-black" placeholder=" " />
<br/> {errors.Contact && <p className='text-red-700 bg-slate-100'>Enter your valid contact</p>}
</label>

<label className="input my-4 input-bordered flex  first: items-center gap-2">
  Date of Birth
  <input type="date" {...register('DoB',  {required: true })} className="grow" placeholder=" " />
  {errors.DoB  && <p className='text-red-700 '>Please enter your Date of Birth</p>}

</label>

<label className="input my-4 input-bordered flex items-center gap-2">
  Email
  <input  type="email" {...register('Email',  {required: true })} className="grow" placeholder=" " />
  {errors.Email  && <p className='text-red-700 '>  enter your emailid </p>}
</label>
<label className="input my-4 input-bordered flex items-center gap-2">
  Password
  <input  type="passeord" {...register('Password',  {required: true })} className="grow" placeholder=" " />
  {errors.Password  && <p className='text-red-700 '>  enter your Password </p>}
</label>
<label className="input my-4 input-bordered flex items-center gap-2">
 Retype Password
  <input  type="password" {...register('RePassword',  {required: true })} className="grow" placeholder=" " />
  {errors.RePassword  && <p className='text-red-700 '>  enter your Password </p>}
</label>
 
<label className="input my-4 input-bordered flex items-center gap-2">
Gender
 <select  className='mx-10 md:mx-32 text-xl  text-center'{...register('Gender')}>
<option hidden value="0">--Select Gender-- </option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>  
       
      </label>
<label className="input my-4 input-bordered flex items-center gap-2">
Hobbies
  <span className='mx-6 text-xl ' > 
  <span className='mx-3'> <input  type="checkbox" value="Sports" id="c1" /> Sports</span>
  <span className='mx-3'> <input  type="checkbox" value="Dance" id="c2" /> Dance </span>
  <span className='mx-3'> <input type="checkbox" value="Music" id="c3" /> Music</span>
  <span className='mx-3'> <input type="checkbox" value="Bike Riding" id="c4" /> Bike Riding </span>
  <span className='mx-3'> <input type="checkbox" value="Book Reading" id="c5" /> Book Reading </span>
  </span>
       
      </label>
  <label className="input my-4 input-bordered flex items-center gap-2">
  Address
  <textarea   {...register('Address',  {required: true })} className="grow" placeholder=" " ></textarea>
  {errors.password  && <p className='text-red-700 '>  enter your Address </p>}
</label>
<label className="input my-4 input-bordered flex items-center gap-2">
City
 <select  className='mx-10 md:mx-32 text-xl  text-center'{...register('Gender')}>
<option hidden value="0">--Select City-- </option>
        <option value="Allahabad ">Allahabad</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
      </select>  
       
      </label>
      <label className="input my-4 input-bordered flex items-center gap-2">
State
 <select  className='mx-10 md:mx-32 text-xl  text-center' >
<option hidden value="0">--Select State-- </option>
        <option value="Andhra Pradesh ">Andhra Pradesh</option>
        <option value="Himanchal Pradesh">Himanchal Pradesh</option>
        <option value="Punjab">Punjab</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Karnatka">Karnatka</option>
      </select>  
       
      </label>
  <input className="btn btn-neutral mx-10 mt-4 text-2xl" type="submit"  value="Register" />
   <input className="btn btn-neutral mx-10 my-4 md:my-9 text-2xl" type="reset"  value="Clear" />
  <br/>
   
     </div>
    </div>
   
    </form>
    <Footer />
    </>
  )
}

export default Register
