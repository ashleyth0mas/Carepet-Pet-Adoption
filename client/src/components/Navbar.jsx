import React,{useState} from 'react';
import img1  from '../assets/img1.png';
import { Link } from 'react-router-dom';
import carepet from '../assets/carepet.png';


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => setNavbar(!navbar)
  return (
    <div className='w-screen h-[80px] z-10 bg-[#F19A56] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
      
      <div className='flex items-center'>
      <img className='w-1/5' src={carepet} alt="carepet"/>

     
        <ul className='hidden md:flex'>
        <li><Link to="/">Home</Link></li>
          <li><Link to = "/category">Category</Link></li>
          <li><Link to = "/meet">Donate</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contact">Bookings</Link></li>
          
          
          
         
       
         
          
        </ul>
      </div>
      <div className='hidden md:flex pr-4'>
      <Link to ="/login">
      <button className='border-none bg-transparent text-[#103559] mr-4 py-3 px-4'>Log In</button></Link>
      <div className='hidden md:flex pr-4'>
      <Link to ="/signup">
      <button className='px-8 py-3'>Sign up</button></Link>
      
      </div>
      </div>
     
      <div className='md:hidden' onClick={handleClick}>
        {!navbar ?  < MenuIcon className='w-5'/> : < CloseIcon className='w-5'/> }
      
      </div>
      </div>
      <ul className={!navbar ? 'hidden': 'absolute bg-[#FCEED5] w-full px-8'}>
      <li className='border-b-2 border-[#EDD4A1] w-full'>Home</li>
      <li className='border-b-2 border-[#EDD4A1] w-full'>Category</li>
      <li className='border-b-2 border-[#EDD4A1] w-full'>About</li>
       <li className='border-b-2 border-[#EDD4A1] w-full'>Meet</li>
       <li className='border-b-2 border-[#EDD4A1] w-full'>Contact</li>
       <div className='flex flex-col my-4'>
        <button className='bg-transparent text-[#002A48] px-8 py-3 mb-4'>Log In</button> {''}{''}
        <button className='bg-[#002A48] text-white px-8 py-3 mb-4'>Sign up</button>
       </div>
      </ul>
      
    </div>
  )
}

export default Navbar
