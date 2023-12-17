import React from 'react'
import img2  from '../assets/img2.png' 
import {motion} from  "framer-motion"
import { navVariants } from '../utils/motions'

import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='w-full h-full bg-[#D9D9D9] flex flex-col justify-between' >
        
        <div className='grid md:grid-cols-2 justify-center max-w-[1240px] m-auto'>
    
    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
   

        <p className='text-2xl font-semibold'></p>
        <motion.nav variants ={navVariants}
        initial="hidden"
        whileInView="show"
       >
          
        <h1 className='py-3 text-5xl md:text-7xl font-bold text-[#002A48] '>They deserve to be cared for.</h1>
        <p className='text-2xl font-bold'>They have emotions too.</p>
        <br></br>
       
        <Link to='/signup'>
        <button className='py-3 px-6 sm:w-[60%] text-bold my-4'>Get Started
       
        
        </button></Link>
        </motion.nav>
    </div>
    <div>
    <img className = 'mx-16'  src={img2} alt="img2"/>
    </div>


        </div>
     
    </div>
  )
}

export default Header
