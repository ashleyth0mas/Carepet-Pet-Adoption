import React from 'react';
import pug2 from '../assets/pug2.png';
import animals from '../assets/animals.png';
import paw2 from '../assets/paw2.png';
import { Button } from '@mui/material';
function About() {
  return (
    <div className='w-full h-full bg-[#D9D9D9] flex flex-col justify-between  flex items-center p-40'>
    

   <div classname='w-[200px] h-[200px] bg-black rounded-[30px]'>
    <div className="w-[543px] h-20 text-right text-black text-[64px] font-normal font-['Kiwi Maru']">Our Story</div> 
    <div className="flex justify-center ">
    <img className="w-[445px] h-[306px] mx-4 my-4 rounded-[30px]" src={animals} />
    <div className="w-[405px] h-[160px] text-right text-black my-6 text-md font-normal font-['Kiwi Maru']">Welcome to The Pet Adoption Website, where tech meets compassion! We're a group of passionate tech students dedicated to connecting pets with loving homes. Our mission is simple: leverage technology to simplify and enhance the pet adoption process. As avid animal lovers, we bring creativity and problem-solving skills to ensure a seamless, enjoyable experience for both pets and their future families. Join our community, explore our platform, and be a part of the joy of pet adoption!</div>
  
    </div>
    </div>

<div className="w-[1260px] h-[369px] bg-black rounded-[30px]" >
<div className=" text-center text-white">
  <br></br><br></br>
    <span style={{fontSize: '40px'}}>Join us <br/></span>
    <span style={{ fontSize: '2em'}}>Pet Adoption Family</span>
</div>   

<div className="w-[1050px] h-[79px] my-3 mx-20 text-white text-md font-normal ">Join our community and be a part of something extraordinary. Whether you're looking to adopt a lifelong friend, offer a temporary home through fostering, volunteer your time and skills, contribute financially to support our cause, spread the word on social media, participate in online events, or explore partnership opportunities, there's a meaningful way for you to make a difference in the lives of animals. Together, we're on a mission to connect loving homes with furry companions and create a world where every pet has a chance at happiness. Connect with us today and become a vital part of our compassionate community.</div>

</div>
</div>
  )
}

export default About