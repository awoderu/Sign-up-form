import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-neutral-600">
        <div className='w-full  max-w-md bg-[#222] rounded-xl drop-shadow-xl  ring-4 py-8 px-8 '>
         <h2 className='text-[28px] font-bold text-white mb-6 text-center'>
           Sign Up
         </h2>
          <form className='flex flex-col'>
            <div className='flex space-x-4 mb-4'>
              <input placeholder='First Name' className='bg-white text-olive-950 rounded-xl p-2 w-1/2 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              
              </input>
              <input placeholder='Last Name'
               className='bg-red-50 text-olive-950 rounded-xl p-2 w-1/2 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
            </div>
            <input placeholder='Email'
               className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
              <input placeholder='Password'
               className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
              <input placeholder='Confirm password'
               className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
              <button className='bg-linear-to-r/srgb from-indigo-500 to-blue-500
               text-white font-medium py-2 px-4 rounded-md hover:bg-white 
               align-center transition ease-in duration-200'>
                   Click me 
            </button>
            <p className='text-white mt-4 text-center'>
              Already have an account?
              <a className='text-white hover:underline mt-4 px-1'> Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
