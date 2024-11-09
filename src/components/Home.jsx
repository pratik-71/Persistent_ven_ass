import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='py-10 bg-[#252A30] ont-Cormorant flex flex-col justify-center items-center h-screen '>
      
      <div className='flex justify-center items-center pl-4 pr-2 py-2 bg-[#36404D] gap-4 rounded-3xl'>
             <FaEye className='text-xl text-orange-400'/>

             <p className='text-lg  text-gray-200'>Don't see yourself?</p>

             <p className='text-md text-gray-300'>You may not have completed our intake form.</p>         

             <Link to="/form">
             <button className='flex items-center justify-center gap-2 rounded-2xl bg-gray-100 px-2 py-2 text-[#5f4e39] text-sm font-semibold'>
                <FaLink/>INTAKE FORM
             </button>
             </Link>
      </div>


      

    </div>
  )
}

export default Home
