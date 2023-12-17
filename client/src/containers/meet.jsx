import React, { Fragment, useState } from 'react';

import img4 from '../assets/img4.png';
import { navVariants, slideIn } from '../utils/motions';
import { motion } from 'framer-motion';

const Meet = () => {
  const [petname, setPetName] = useState('');
  const [category, setCategory] = useState('');
  const [parentname, setParentName] = useState('');
  const [meetdate, setMeetdate] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        parentname,
        petname,
        category,
        meetdate,
        phonenumber,
        description,
      };

      const response = await fetch('http://localhost:5000/realmeet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      // Assuming you want to redirect to '/' after the data is saved
      if (response.ok) {
        console.log('Data Saved Successfully');
        window.location = '/';
      } else {
        console.error('Failed to save data');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className='w-full h-screen bg-[#D9D9D9] flex flex-col justify-between items-center'>
        <div className='w-3/4 h-3/4 w-34 bg-[#F19A56] fixed top-32 bottom-32 rounded-lg shadow-md p-16 flex flex-col-reverse lg:flex-row'>
          <div className='lg:w-1/2'>
          <motion.nav variants ={slideIn("left", "tween", 0, 0.5)}
        initial="hidden"
        whileInView="show"
       >
            <h1 className='text-5xl text-decoration-style: dashed text-center text-black'>
             Donate Your Pet
            </h1>
            <br/>
            <h2 className='text-2xl text-decoration-style: dashed text-center text-black'>Carepet would take of your pet and find their forever homes</h2>
           
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
              <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Parent Name'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={parentname}
                    onChange={(e) => setParentName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Pet Name'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={petname}
                    onChange={(e) => setPetName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Category'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Meet Date'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={meetdate}
                    onChange={(e) => setMeetdate(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Description'
                    className='form-input p-2 border rounded h-20 text-black'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className='text-center'>
                <button
                  className='bg-black text-white text-lg py-2 px-7 rounded-full hover:bg-[#0d0f10] focus:outline-none'
                  type='submit'
                >
                  Submit
                </button>
                
              </div>
            </form>
            </motion.nav>
          </div>
          <div className='lg:w-2/5'>
            <img className='mx-20 ' src={img4} alt='img4' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Meet;
