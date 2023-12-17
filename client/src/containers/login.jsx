import React, { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };
      const response = await fetch("http://localhost:5000/checkuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (data.isValid) {
        setLoginStatus("Login successful!");
        // Redirect to the home page
        window.location = '/';
      } else {
        setLoginStatus("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err.message);
      setLoginStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen bg-[#D9D9D9] flex flex-col justify-between p-8 flex items-center">
      <div className="w-full md:w-96 bg-[#103559] fixed top-32 bottom-32 rounded-lg shadow-md p-4">
        <h1 className="text-3xl md:text-3xl font-bold text-white text-center mb-4 py-12">
          Login
        </h1>
        <form onSubmit={onSubmitForm}>
          <div className=" bottom-2 top-32 py-1">
            <label>
              
              <input
                type="text"
                placeholder="  Username"
                className="ml-14 w-50 h-10 text-black rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br></br><br></br>
            <label>
             
              <input
                className="mt-3 ml-14 w-50 h-10 text-black rounded"
                type="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <br></br>
          <div className="mt-1 ml-28">
          <button
            className="top-1 bg-black hover:bg-[#1b1a1a] font-semibold text-white py-2 px-7 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button></div>
        </form>
        {loginStatus && <p>{loginStatus}</p>}
      </div>
    </div>
  );
};

export default Login;
