import React, { Fragment, useState } from "react";
import paw from "../assets/paw.png";
import Login from "./login";

import dog3 from "../assets/dog3.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:5000/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/login";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className='w-full h-screen bg-[#D9D9D9] flex flex-col justify-between p-8 flex items-left'>
      <div className='grid md:grid-cols-2 justify-center my-11 w-5/6 m-auto'>
        
        <div className="w-full h-34 bg-[#103559]  rounded-lg shadow-md p-14  my-10">
          <img className='mx-auto my-1 w-20' src={paw} alt="img2" />
          

          <h1 className='text-3xl md:text-3xl font-bold text-white text-center mb-4'>Sign up</h1>

          <h2 className='text-1xl md:text-2xl text-white text-center mb-4'>
            Create a new account
          </h2>

          <br />
          <form onSubmit={onSubmitForm}>
            <div className="mb-5 py-2 text-center">
              <input
                type="text"
                placeholder="Username"
                className="form-input p-2 border rounded w-3/4 mx-auto text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p />
              <br />
              <input
                type="text"
                placeholder="Password"
                className="form-input p-2 border rounded w-3/4 mx-auto text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p />
              <br />
              <input
                type="text"
                placeholder="Confirm Password"
                className="form-input p-2 border rounded w-3/4 mx-auto text-black"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                className='bg-black hover:bg-[#1b1b1b] font-semibold text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <p className='text-white text-center text-1xl md:text-2xl font-bold font-serif font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'></p>
          </form>
        </div>
        <div className="mx-4 p-20 ml-right ">
        <img className='my-48 fixed top-24 w-2/6' src={dog3} alt="img2" />
        
        <div className="alig">
        <h1 className="text-3xl font-bold mx-6">Most loyal <br></br> & Most Loving</h1>
        <h1 className="text-2xl font-medium mx-7  ">They deserve the whole world</h1>
        <br></br>
        </div>
        
    </div>
   
        </div>

      </div>
    </Fragment>
  );
};

export default SignUp;
