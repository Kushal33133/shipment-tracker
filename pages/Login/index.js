import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const index = () => {
  const router = useRouter();
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", { email, password })
      .then((res) => {
        console.log(res);
        if(res.statusText=="OK"){
          if(res.data.users.role==="admin"){
            router.push("/Dashboard");
          }
          else{
            router.push("/Register");
            
          }
        }
        // router.push("/Login");
      })
      .catch((err) => console.log(err));
  };
  return (


    <div className="bg-gray-100 flex items-center justify-center h-screen">

    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Log in to Your Logistics</h2>
        
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email" 
                onChange={(data) => setEmail(data.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
            </div>
    
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" 
                onChange={(data) => setPassword(data.target.value)}
                id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
            </div>
    
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Log In</button>
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
        </form>
    
        <div className="mt-6 text-center">
        <p className="text-gray-600">Don't have an account?</p>
        <a href="/Signup" className="text-blue-500 hover:underline">Register here</a>
    </div>
    </div>
    
    </div>

    
   
  );
};

export default index;
